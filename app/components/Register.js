import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passVisible, setPassVisible] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	return (
		<ScrollView className="p-2">
			<View className="bg-white px-2 py-8">
				<Text className=" uppercase  mt-2 text-xl text-center font-bold tracking-widest">
					sign up using your email address
				</Text>

				<View>
					<Text className="uppercase font-bold text-xs text-gray-600 my-3">
						Email address
					</Text>
					<TextInput
						onChangeText={setEmail}
						keyboardType="email-address"
						className="py-3 border-2 border-dashed border-gray-400 px-3 "
					/>
					<Text className="uppercase font-normal text-xs text-gray-600 my-3">
						verification email will be sent to this email!
					</Text>
				</View>
				<View>
					<Text className="uppercase font-bold text-xs text-gray-600 my-3">
						first name:
					</Text>
					<TextInput
						onChangeText={setFirstName}
						keyboardType="default"
						className="py-3 border-2 border-dashed border-gray-400 px-3 "
					/>
				</View>
				<View>
					<Text className="uppercase font-bold text-xs text-gray-600 my-3">
						Last name:
					</Text>
					<TextInput
						onChangeText={setLastName}
						keyboardType="default"
						className="py-3 border-2 border-dashed border-gray-400 px-3 "
					/>
				</View>
				<View>
					<Text className="uppercase font-bold text-xs text-gray-600 my-3">
						Password:
					</Text>
					<View className="relative">
						<TextInput
							onChangeText={setPassword}
							keyboardType="default"
							secureTextEntry={passVisible && true}
							className="py-3 border-2 border-dashed border-gray-400 px-3"
						></TextInput>
						<Pressable
							style={{
								display:
									password.length > 0 ? 'absolute' : 'none',
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
							Must be 6 or more characters and contaian at least
							one number
						</Text>
					</View>
				</View>
			</View>
			<View>
				<View>
					<Text className="uppercase">Date of birth (optional)</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Register;
