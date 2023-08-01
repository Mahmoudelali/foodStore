import {
	timing,
	getYearsRange,
	getDaysRange,
	getMonthsRange,
	GenderLabels,
	checkBoxLabels,
	formValidation,
} from './data';
import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import LabelInput from './LabelInput';
import { SelectList } from 'react-native-dropdown-select-list';
import CheckBox from 'react-native-check-box';
import { RadioButton } from 'react-native-radio-buttons-group';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
const Register = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passVisible, setPassVisible] = useState(false);
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [selected, setSelected] = useState('');
	const [userGender, setUserGender] = useState(null);
	const [terms, setTerms] = useState([]);
	const [submitDisabled, setSubmitDisabled] = useState(true);
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

	useEffect(() => {
		validate();
	}, [terms]);

	const validate = () => {
		formValidation({
			email,
			password,
			fname,
			lname,
			terms,
			handler: setSubmitDisabled,
		});
	};
	return (
		<ScrollView className="px-2 " keyboardDismissMode="on-drag">
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<View className="bg-white px-2 py-8">
					<Text className=" uppercase  mt-2 text-xl text-center font-bold tracking-widest">
						sign up using your email address
					</Text>
					{registerFields.map(
						({ label, handler, keyboardType }, index) => {
							return (
								<LabelInput
									key={index}
									validate={validate}
									keyboardType={keyboardType}
									labelText={label}
									inputHandler={handler}
								/>
							);
						},
					)}
					<View>
						<Text className="uppercase font-bold text-xs text-gray-600 my-3">
							Password:
						</Text>
						<View className="relative">
							<TextInput
								onEndEditing={validate}
								onChangeText={setPassword}
								keyboardType="default"
								secureTextEntry={passVisible && true}
								className="py-3 border-2 border-dashed border-gray-400 px-3"
							/>
							<Pressable
								style={{
									display:
										password.length > 0
											? 'absolute'
											: 'none',
								}}
								className={`absolute right-3 top-3 `}
								onPress={() => {
									setPassVisible(!passVisible);
								}}
							>
								<Text className="uppercase text-sm font-semibold text-gray-500">
									{!passVisible ? 'Hide' : 'Show'}
								</Text>
							</Pressable>
							<Text className="font-bold text-xs text-gray-600 my-3">
								Must be 6 or more characters and contaian at
								least one number
							</Text>
						</View>
					</View>
				</View>
				<View className="px-4 py-7 relative -z-50 ">
					<Text className="uppercase font-bold text-xs text-gray-500 mb-2">
						Date of birth (optional)
					</Text>
					<View className="pt-2 pb-1 relative flex flex-row  z-50">
						{timing.map((time, index) => (
							<SelectList
								dropdownStyles={styles.dropdownStyles}
								boxStyles={styles.boxStyles}
								maxHeight={150}
								key={index}
								placeholder={
									time === 'days'
										? 'DD'
										: time === 'months'
										? 'MM'
										: 'YYYY'
								}
								setSelected={(val) => setSelected(val)}
								data={
									time == 'years'
										? getYearsRange
										: time == 'days'
										? getDaysRange
										: getMonthsRange
								}
								save="value"
								search={false}
								label="year"
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
									key={gen.id}
									onPress={setUserGender}
									size={20}
									value={gen.value}
									label={gen.label}
									labelStyle={{ color: 'gray' }}
									borderColor={
										userGender === gen.id
											? '#32CD32'
											: 'gray'
									}
									id={gen.id}
									containerStyle={{
										zIndex: '100',
										marginRight: 15,
									}}
									color="#32CD32"
									selected={userGender == gen.id && true}
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
							style={{ marginBottom: 30 }}
							key={id}
							isChecked={terms.includes(label) && true}
							rightText={label}
							checkedCheckBoxColor="#32CD32"
							rightTextStyle={{ letterSpacing: 1, fontSize: 13 }}
							onClick={() => {
								!terms.includes(label)
									? setTerms([...terms, label])
									: setTerms(
											terms.filter((term) => {
												return term !== label;
											}),
									  );
								validate();
							}}
						/>
					))}
					<View className="py-4 px-2">
						<Pressable
							style={
								submitDisabled
									? styles.submitDisabled
									: styles.submitEnabled
							}
							className="bg-accent mb-1"
							disabled={submitDisabled && true}
						>
							<Text className="uppercase text-center p-3 text-white font-bold text-lg">
								JOIN COUPWAY
							</Text>
						</Pressable>
						<Text className="text-gray-500">
							You have an account? Sign In
							<Pressable
								onPress={() => navigation.navigate('Login')}
							>
								<Text className="uppercase  font-semibold text-gray-500">
									{' '}
									here
								</Text>
							</Pressable>
						</Text>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default Register;

const styles = StyleSheet.create({
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
		backgroundColor: 'lightgrey',
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
