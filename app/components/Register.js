import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from './LabelInput';
import { SelectList } from 'react-native-dropdown-select-list';
import CheckBox from 'react-native-check-box';
import { RadioButton } from 'react-native-radio-buttons-group';
import PasswordInput from './PasswordInput';
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

const Register = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [selected, setSelected] = useState('');
	const [userGender, setUserGender] = useState(null);
	const [terms, setTerms] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const validateForm = () => {
		return !email.match(emailRegex) ||
			!password.match(/^(?=.*\d).{6,}$/) ||
			password === '' ||
			fname.length < 2 ||
			lname.length < 2 ||
			!terms.includes(
				'Please accept terms of service in order to continue',
			)
			? true
			: false;
	};
	const registerFields = [
		{
			label: 'Email Address:',
			handler: setEmail,
			keyboardType: 'email-address',
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
	const selectListTimeProps = {
		dropdownStyles: styles.dropdownStyles,
		boxStyles: styles.boxStyles,
		maxHeight: 120,
		setSelected: (val) => setSelected(val),
		save: 'value',
		search: false,
		label: 'year',
	};
	const genderRadiosProps = {
		onPress: setUserGender,
		containerStyle: {
			// zIndex: '100',
			marginRight: 15,
		},
		color: '#13d0ca',
		size: 20,
		labelStyle: { color: 'gray' },
	};
	const genderCheckBoxProps = {
		checkedCheckBoxColor: '#13d0ca',
		rightTextStyle: { letterSpacing: 1, fontSize: 13 },
		style: { marginBottom: 30 },
	};
	const errorLabels = {
		emptyField: 'This field is required',
		inValidemail: 'Please enter a valid email address',
		wrongCredentials:
			'Please make sure that your email or password is correct',
		termsOfService: 'Please accept terms of service in order to continue',
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<ScrollView className="px-2 " keyboardDismissMode="on-drag">
				<View className="bg-white px-2 py-8">
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
							'Must be 6 or more characters and contaian at least one number'
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
							{GenderLabels.map((gen) => (
								<RadioButton
									{...genderRadiosProps}
									selected={userGender == gen.id && true}
									key={gen.id}
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
					<Text className="uppercase font-bold text-xs text-gray-600 my-3">
						Contact preferences
					</Text>
					{checkBoxLabels.map(({ label, id }) => (
						<CheckBox
							{...genderCheckBoxProps}
							key={id}
							isChecked={terms.includes(label)}
							rightText={label}
							onClick={() => {
								!terms.includes(label)
									? setTerms([...terms, label])
									: setTerms(
											terms.filter((term) => {
												return term !== label;
											}),
									  );
							}}
						/>
					))}
					<View className="py-4 px-2">
						<Button
							label={!loading ? 'JOIN COUPWAY' : 'Loading..'}
							onPress={validateForm}
						/>
						<Text className="text-gray-500">
							You have an account? Sign In{' '}
							<Button
								label={'Here'}
								textStyle={styles.labelStyles}
								buttonStyle={styles.buttonStyle}
								onPress={() => navigation.navigate('Login')}
							/>
						</Text>
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
		fontSize: 12,
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
		// zIndex: 50,
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
