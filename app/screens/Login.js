import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from '../components/LabelInput';
import Button from '../components/Button';

const Login = ({ navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [loading, setLoading] = useState(false);

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
				<Text className="uppercase font-light text-xs mb-4">forget Password ?</Text>
			),
		},
	];
	return (
		<ScrollView>
			<View className="bg-white p-5 m-3">
				{loginFields.map(({ label, handler, extraComponent }, index) => (
					<LabelInput
						key={index}
						inputHandler={handler}
						labelText={label}
						placeholder={label}
						extraComponent={extraComponent}
						// borderStyle={'underline'}
					/>
				))}
				<View>
					<Button label={'Sign In'} />

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
