import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	return (
		<ScrollView>
			<View className="bg-white p-5 m-3">
				<Text className="uppercase  font-bold text-xs text-gray-600 my-3">
					Email Address:
				</Text>
				<TextInput
					keyboardType="email-address"
					className="py-3 border-2 border-dashed border-gray-400 px-3 "
					onChangeText={setEmail}
				/>
				<Text className="uppercase font-bold text-xs text-gray-600 my-3">
					Password:
				</Text>
				<TextInput
					keyboardType="visible-password"
					className="py-3 border-2 border-dashed border-gray-400 px-3  mb-1"
					onChangeText={setPassword}
				/>

				<Text className="uppercase font-light text-xs mb-4">
					forget Password ?
				</Text>
				<Pressable className="bg-green-400 mb-4">
					<Text className="uppercase text-center p-3   text-white">
						Sign In
					</Text>
				</Pressable>
				<Text className="uppercase font-light text-xs">
					dont have an account? Sign up
					<Pressable onPress={() => navigation.navigate('Register')}>
						<Text className="uppercase text-xs"> here</Text>
					</Pressable>
				</Text>
			</View>
		</ScrollView>
	);
};

export default Login;
