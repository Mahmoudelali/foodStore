import React, { useState } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from '../components/labelInput/LabelInput.js';
import Button from '../components/Button';
import { useNavigation } from 'expo-router';
import Toast from 'react-native-toast-message';
import { signIn } from '../components/data.js';
import { colors, fonts } from '../components/css';
import { showToaster } from '../common/commonSlice.js';
import { useDispatch } from 'react-redux';

const Login = () => {
	const navigation = useNavigation();
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();

	const loginFields = [
		{
			label: 'Email Address:',
			handler: setUsername,
			state: username,
		},
		{
			label: 'Password:',
			state: password,
			handler: setPassword,
			extraComponent: (
				<Text
					className="uppercase font-light text-xs mb-4"
					style={styles.font}
				>
					forget Password ?
				</Text>
			),
		},
	];

	const handleSubmitLogin = () => {
		if (!username || !password) {
			dispatch(showToaster());
		}
	};
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
						/>
					),
				)}
				<View>
					<Button
						disabled={loading}
						label={
							loading ? (
								<View>
									<ActivityIndicator color="#fff" />
								</View>
							) : (
								'Sign In'
							)
						}
						onPress={handleSubmitLogin}
					/>
					<Text
						style={styles.font}
						className="uppercase text-xs mt-1 text-center leading-6"
					>
						don't have an account? Sign up
						<Text
							style={[styles.labelStyles, styles.buttonStyle]}
							onPress={() => navigation.navigate('Register')}
						>
							HERE
						</Text>
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
		textDecorationLine: 'underline',
	},
	font: {
		fontFamily: fonts.light,
		color: colors.gray,
	},
});
