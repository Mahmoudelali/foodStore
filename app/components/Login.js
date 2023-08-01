import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LabelInput from './LabelInput';

const Login = ({ navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const loginFields = [
		{
			label: 'Email Address:',
			handler: setEmail,
		},
		{
			label: 'Password:',
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
							extraComponent={extraComponent}
						/>
					),
				)}
				<View>
					<Pressable className="bg-accent mb-4">
						<Text className="uppercase text-center p-3 text-white font-bold text-lg">
							Sign In
						</Text>
					</Pressable>
					<Text className="uppercase font-light text-xs">
						dont have an account? Sign up
						<Pressable
							onPress={() => navigation.navigate('Register')}
						>
							<Text className="uppercase text-xs"> here</Text>
						</Pressable>
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Login;
