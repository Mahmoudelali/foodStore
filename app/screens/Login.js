import React, { useState } from 'react';
import { View, Text, StyleSheet ,ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { toast_options } from '../index.js';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/registration/accounts/login/`;

	const showToast = (type, label1, label2) => {
		return Toast.show({
			type: type,
			text1: label1,
			text2: label2 || '',
		});
	};

	const login = async () => {
		const data = {
			login: email,
			password: password,
		};
		axios
			.get(`${process.env.EXPO_PUBLIC_SERVER_URL}api/get-csrf-token/`)
			.then((res) => {
				setLoading(true);
				axios
					.post(uri, data, {
						headers: {
							'X-CSRFToken': res.data.csrfToken,
						},
					})
					.then(async (response) => {
						await AsyncStorage.setItem(
							'authData',
							JSON.stringify(response.data),
						)
						showToast(
							'success',
							`welcome ${response.data.user_data.username} !`,
						);
						setLoading(false);
						setTimeout(() => {
							navigation.navigate('Profile',response.data);
						}, 2000);
					})
					.catch((err) => {
						console.log(err);
						setLoading(false)
					});
			})
			.catch((err) => {
				console.log(err);
				setLoading(false)
			});
	};

	const loginFields = [
		{
			label: 'Email Address:',
			handler: setEmail,
			state: email,
		},
		{
			label: 'Password:',
			state: password,
			handler: setPassword,
			extraComponent: (
				<Text className="uppercase font-light text-xs mb-4">
					forget Password ?
				</Text>
			),
		},
	];
	return (
		<ScrollView>
			<View className="bg-white p-5 m-3">
				{loginFields.map(
					({ label, handler, extraComponent }, index) => (
						<LabelInput
							key={index}
							inputHandler={handler}
							labelText={label}
							placeholder={label}
							extraComponent={extraComponent}
							// borderStyle={'underline'}
						/>
					),
				)}
				<View>
					<Button
						label={
							loading == false ? (
								'Sign In'
							) : (
								<View style={style.activityIndicator}>
									<ActivityIndicator />
								</View>
							)
						}
						onPress={login}
					/>

					<Text className="uppercase font-light text-xs mt-1">
						dont have an account? Sign up{' '}
						<Button
							label={'Here'}
							textStyle={styles.labelStyles}
							buttonStyle={styles.buttonStyle}
							onPress={() => navigation.navigate('Register')}
						/>
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Login;

const styles = StyleSheet.create({
	labelStyles: {
		backgroundColor: 'transparent',
		color: '#a0a0a0',
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	letterSpacing: 1,
	buttonStyle: {
		backgroundColor: 'transparent',
		padding: 0,
		paddingTop: 5,
	},
});

const style = StyleSheet.create({
	container: {
		flex: 0.9,
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
	},
});
