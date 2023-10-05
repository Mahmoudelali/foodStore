import React, { useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from './LabelInput';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';
import { RadioButton } from 'react-native-radio-buttons-group';
import PasswordInput from './PasswordInput';
import { useNavigation } from 'expo-router';
import Button from './Button';
import {
	timing,
	getYearsRange,
	getDaysRange,
	getMonthsRange,
	GenderLabels,
	checkBoxLabels,
	emailRegex,
} from './data';
import {
	Platform,
	Text,
	View,
	StyleSheet,
	KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const showToast = (type, label1, label2) => {
	return Toast.show({
		type: type,
		text1: label1,
		text2: label2 || '',
	});
};

const Register = ({ setUser, setIsLoggedIn }) => {
	const navigation = useNavigation();
	const selectListTimeProps = {
		dropdownStyles: styles.dropdownStyles,
		boxStyles: styles.boxStyles,
		maxHeight: 120,
		setSelected: (val) => setSelected(val),
		save: 'value',
		search: false,
		label: 'year',
	};
	const toast_options = {
		visibilityTime: 2000,
		position: 'top',
		topOffset: 10,
	};
	const genderRadiosProps = {
		onPress: setUserGender,
		containerStyle: {
			zIndex: '100',
			marginRight: 15,
		},
		color: '#13d0ca',
		size: 20,
		labelStyle: { color: 'gray' },
	};
	const new_user_uri = process.env.EXPO_PUBLIC_SERVER_URL;
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [selected, setSelected] = useState('');
	const [userGender, setUserGender] = useState(null);
	const [terms, setTerms] = useState([]);
	const [loading, setLoading] = useState(false);
	const scrollRef = useRef();

	const toTop = () => {
		scrollRef.current?.scrollTo({
			y: 0,
			animated: true,
		});
	};

	const register_user = async () => {
		const user_data = {
			username,
			password,
			password_confirm: password,
			first_name: fname,
			last_name: lname,
			email_address: email,
		};
		if (
			!email.match(emailRegex) ||
			!password.match(/^(?=.*\d).{6,}$/) ||
			password === '' ||
			fname.length < 2 ||
			lname.length < 2
		) {
			toTop();
			showToast('error', 'Check your inputs');
			return;
		}
		setLoading(true);
		axios
			.post(
				`${new_user_uri}api/registration/accounts/register/`,
				user_data,
			)
			.then((res) => {
				setLoading(false);
				toTop();
				showToast('success', 'Welcome to coupway!');
				setTimeout(() => {
					navigation.navigate('Login');
				}, 1000);
			})
			.catch((error) => {
				setLoading(false);
				toTop();
				showToast(
					'error',
					'Failed to create an account!',
					'Try again later',
				);
				console.log(error.message);
			});
	};
	const registerFields = [
		{
			label: 'Email Address:',
			handler: setEmail,
			keyboardType: 'email-address',
		},

		{
			label: 'username:',
			handler: setUsername,
			keyboardType: 'default',
		},
		{
			label: 'first name:',
			handler: setFname,
			keyboardType: 'default',
		},
		{
			label: 'last name:',
			handler: setLname,
			keyboardType: 'default',
		},
	];

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<ScrollView
				className="px-2 "
				keyboardDismissMode="on-drag"
				ref={scrollRef}
			>
				<View className="bg-white px-2 py-8">
					<View className="relative z-20">
						<Toast {...toast_options} />
					</View>
					<Text className=" uppercase  mt-2 text-xl text-center font-bold tracking-widest">
						sign up using your email address
					</Text>
					{registerFields.map(
						({ label, handler, keyboardType }, index) => {
							return (
								<LabelInput
									key={index}
									keyboardType={keyboardType}
									labelText={label}
									inputHandler={handler}
								/>
							);
						},
					)}
					<PasswordInput
						hint={
							'Must be 6 or more characters and contaian one number'
						}
						password={password}
						setPassword={setPassword}
					/>
				</View>
				<View className="px-4 py-7 relative -z-50 ">
					<Text className="uppercase font-bold text-xs text-gray-500 mb-2">
						Date of birth (optional)
					</Text>
					<View className="pt-2 pb-1 relative flex flex-row  z-50">
						{timing.map((time, index) => (
							<SelectList
								key={index}
								placeholder={
									time === 'days'
										? 'DD'
										: time === 'months'
										? 'MM'
										: 'YYYY'
								}
								data={
									time == 'years'
										? getYearsRange
										: time == 'days'
										? getDaysRange
										: getMonthsRange
								}
								{...selectListTimeProps}
							/>
						))}
					</View>
					<Text className="border-2 border-dashed border-gray-400 text-xs">
						tell us, you'll get a birthday treat if you do!
					</Text>

					<View className="pt-4 relative z-[-500]">
						<Text className="uppercase font-bold text-xs text-gray-500 mb-3">
							Gender (optional)
						</Text>
						<View className="flex flex-row">
							{GenderLabels.map((gen, index) => (
								<RadioButton
									{...genderRadiosProps}
									selected={userGender == gen.id && true}
									key={index}
									value={gen.value}
									label={gen.label}
									borderColor={
										userGender === gen.id
											? '#13d0ca'
											: 'gray'
									}
									id={gen.id}
								/>
							))}
						</View>
					</View>
				</View>
				<View className="px-2 py-6 bg-white ">
					<Text className="uppercase font-bold text-xs text-gray-600 mb-4">
						Contact preferences
					</Text>
					{checkBoxLabels.map(({ label }, index) => (
						<View className="flex-row items-start  pr-2 mb-8">
							<Checkbox
								className='mt-1.5'
								value={terms.includes(label)}
								color={terms.includes(label) && '#13d0ca'}
								key={index}
								onValueChange={() => {
									!terms.includes(label)
										? setTerms([...terms, label])
										: setTerms(
												terms.filter((term) => {
													return term !== label;
												}),
										  );
								}}
							/>
							<Text className="pl-2 leading-5 tracking-wider">
								{' '}
								{label}
							</Text>
						</View>
					))}
					<View className="py-4 px-2">
						<Button
							label={!loading ? 'JOIN COUPWAY' : 'Loading..'}
							onPress={() => register_user()}
						/>
						<View className="flex-row items-center justify-center">
							<Text className="text-gray-500 flex-row ">
								You have an account? Sign In{' '}
							</Text>
							<Button
								label={'Here'}
								textStyle={styles.labelStyles}
								buttonStyle={styles.buttonStyle}
								onPress={() => navigation.navigate('Login')}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default Register;

const styles = StyleSheet.create({
	labelStyles: {
		backgroundColor: 'transparent',
		color: '#a0a0a0',
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},

	buttonStyle: {
		backgroundColor: 'transparent',
		padding: 0,
		paddingTop: 5,
	},
	submitEnabled: {
		backgroundColor: '#32CD32',
	},
	submitDisabled: {
		backgroundColor: 'lightgrey',
	},
	container: {
		flex: 1,
	},
	dropdownStyles: {
		zIndex: 50,
		borderRadius: 0,
		borderStyle: 'dashed',
		borderWidth: 2,
		backgroundColor: '#ddd',
		position: 'absolute',
		top: 40,
		left: 0,
		right: 0,
	},
	boxStyles: {
		position: 'relative',
		borderBlockColor: 'gray',
		marginRight: 15,
		borderRadius: 0,
		borderStyle: 'dashed',
		borderWidth: 2,
		maxHeight: 50,
	},
});
