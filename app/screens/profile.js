import { View, Text, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const optionIconStyles = {
	size: 30,
	color: '#13d0ca',
};

const Option = ({ optionName, icon, navigation, navigateName }) => (
	<Pressable onPress={navigation}>
		<View className="flex flex-row py-3 pl-10">
			<View className="basis-[15%] ">{icon}</View>
			<View className="flex flex-row items-center">
				<Text className="basis-[70%] pl-10 pb-1 tracking-[1] font-semibold">
					{optionName}
				</Text>
				<AntDesign name="right" size={16} color="black" />
			</View>
			<View className="absolute bottom-0 right-0 h-[1] w-[80%] bg-gray-300 ml-5" />
		</View>
	</Pressable>
);

export default function Profile({ navigation }) {
	const [dataUser, setDataUser] = useState(null);
	console.log(dataUser);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const User = await AsyncStorage.getItem('authData');
				if (User) {
					setDataUser(JSON.parse(User));
				}
			} catch (error) {
				console.error('Error fetching basket data:', error);
			}
		};
		fetchData(); // Call the async function here
	}, [dataUser]);

	const token = dataUser == null;
	const Name = 'Guest';
	const authenticatedUserOptions = [
		{
			optionName: 'My Coupons',
			navigation: () => navigation.navigate('MyCoupon'),
			navigateName: 'MyCoupon',
			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="shopping-bag"
					style={{ textAlign: 'right' }}
				/>
			),
		},
		{
			optionName: 'My Details',
			navigation: () => navigation.navigate('MyDetails'),

			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="sticky-note-2"
					style={{ textAlign: 'right' }}
				/>
			),
		},
		{
			optionName: 'Change Password',
			navigateName: 'ChangePassword',
			navigation: () => navigation.navigate('ChangePassword'),
			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="lock"
					style={{ textAlign: 'right' }}
				/>
			),
		},
	];
	const staticOptions = [
		{
			optionName: 'Contact Us',
			navigation: () => navigation.navigate('ContactUs'),
			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="settings-phone"
					style={{ textAlign: 'right' }}
				/>
			),
		},

		{
			optionName: 'About Us',
			navigation: () => navigation.navigate('AboutUs'),

			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="info"
					style={{ textAlign: 'right' }}
				/>
			),
		},
	];
	const LastOptions = [
		{
			optionName: 'My Settings',
			navigation: () => navigation.navigate('AppSetting'),

			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="settings"
					style={{ textAlign: 'right' }}
				/>
			),
		},
		{
			optionName: 'Sign In',
			navigation: () => navigation.navigate('Login'),
			icon: (
				<MaterialIcons
					{...optionIconStyles}
					name="logout"
					style={{ textAlign: 'right' }}
				/>
			),
		},
	];
	return (
		<View className="h-full bg-[#ebe6e6] ">
			<StatusBar backgroundColor="#13d0ca" />
			<View className="flex-row items-center bg-[#13d0ca] h-[20%] ">
				<View className="ml-[10%]">
					<Ionicons
						name="person-circle-outline"
						size={70}
						color="white"
						className="ml-[5%]"
					/>
				</View>
				<Text className="text-white text-[20px] font-bold ml-[5%]">
					{Name ? 'Hi ' + Name : 'Hi there !'}
				</Text>
			</View>
			<View className="absolute top-[15%] bottom-0 right-0 left-0 w-[150%] h-[10%] bg-[#ebe6e6] -rotate-6 "></View>
			<View className="bg-white mt-[5%]">
				{token &&
					authenticatedUserOptions.map((option, index) => (
						<Option key={index} {...option} />
					))}
				{staticOptions.map((option, index) => (
					<Option key={index} {...option} />
				))}
			</View>
			<View className="bg-white mt-[5%]">
				{LastOptions.map((option, index) => (
					<Option key={index} {...option} />
				))}
			</View>
		</View>
	);
}
