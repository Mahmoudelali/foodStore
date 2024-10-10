import React, { useState } from 'react';
import { View, Pressable, Text, ActivityIndicator } from 'react-native';
import LabelInput from '../components/labelInput/LabelInput';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { fonts } from '../components/css';
import useFetch from '../components/useFetch';
import axios from 'axios';
import { showToast } from '../components/data';

const MyDetails = ({ user }) => {
	const navigation = useNavigation();
	const [isLoading, setIsLoading] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');

	const [data, loading, setData, , reFetch] = useFetch(
		`${process.env.EXPO_PUBLIC_SERVER_URL}api/getuserprofile/${user?.id}`,
	);
	// console.log('data', data);

	const labelInputProps = [
		{
			borderStyle: 'underline',
			state: email,
			inputHandler: setEmail,
			placeholder: data?.email || 'Add your E-mail',
			labelText: 'Email address',
		},
		{
			borderStyle: 'underline',
			state: number,
			inputHandler: setNumber,
			placeholder: data?.phone_number || 'Add your mobile number',
			labelText: 'phone Number',
		},
	];

	const toast_options = {
		visibilityTime: 2000,
		position: 'top',
		topOffset: 10,
	};

	const handleEdit = async () => {
		try {
			const stateData = {
				user: user?.id,
				email: email,
				first_name: firstName,
				last_name: lastName,
				phone_number: number,
			};

			let payload = {};
			for (let [key, val] of Object.entries(stateData)) {
				if (val == '') continue;
				else {
					payload[key] = val;
				}
			}
			console.log('payload', payload);
			setIsLoading(true);
			const resp = await axios.put(
				`${process.env.EXPO_PUBLIC_SERVER_URL}api/updateuserprofile/${user?.id}`,
				payload,
			);
			console.log(resp.status);

			if (resp.status === 400) {
				return showToast(
					'success',
					'User profile updated successfully',
				);
			}

			setData(resp.data);
			setIsLoading(false);
			showToast('success', 'User profile updated successfully');
			setTimeout(() => {
				navigation.goBack();
			}, 1000);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			showToast('error', error.message);
		}
	};

	if (loading) {
		return (
			<View className="flex-1 justify-center">
				<ActivityIndicator size="large" color={'#13d0ca'} />
			</View>
		);
	}

	return (
		<ScrollView keyboardDismissMode="on-drag">
			<View className="bg-white px-6 mt-3 pb-5 pt-2">
				{data.first_name ? (
					<View className="mb-3">
						<Text className="text-gray-400 mb-1">First name</Text>
						<Text>{data.first_name}</Text>
					</View>
				) : (
					<LabelInput
						borderStyle="underline"
						state={firstName}
						inputHandler={setFirstName}
						placeholder={'First Name'}
						labelText="First Name"
						editable={true}
					/>
				)}
				{data.last_name ? (
					<View>
						<Text className="text-gray-400 mb-1">Last name</Text>
						<Text>{data.last_name}</Text>
					</View>
				) : (
					<LabelInput
						borderStyle="underline"
						state={lastName}
						inputHandler={setLastName}
						placeholder={'Last Name'}
						labelText="Last Name"
						editable={true}
					/>
				)}

				<View>
					{labelInputProps.map((props, index) => (
						<LabelInput key={index} {...props} />
					))}
				</View>
			</View>
			<View className="bg-white p-5 mt-5">
				<Pressable onPress={() => navigation.navigate('AddressBook')}>
					<Text
						style={{ fontFamily: fonts.regular }}
						className="uppercase   text-gray-400 font-bold text-l"
					>
						Address Book
					</Text>
				</Pressable>
			</View>

			<View className="bg-gray-100 py-4 px-10 ">
				<Button
					label={
						isLoading ? (
							<View>
								<ActivityIndicator color="#fff" />
							</View>
						) : (
							'Save Changes'
						)
					}
					onPress={handleEdit}
				/>
			</View>
			<Toast {...toast_options} />
		</ScrollView>
	);
};

export default MyDetails;
