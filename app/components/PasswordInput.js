import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';

const PasswordInput = ({ validate, password, setPassword, hint, errLabel }) => {
	const [passVisible, setPassVisible] = useState(false);

	return (
		<View className="relative">
			<Text className="uppercase font-bold text-xs text-gray-600 my-3">
				Password:
			</Text>
			<TextInput
				// onEndEditing={validate}
				onChangeText={setPassword}
				secureTextEntry={passVisible && true}
				keyboardType="default"
				className="py-3 border-2 border-dashed border-gray-400 px-3 relative"
			/>
			<Pressable
				style={{
					display: password.length > 0 ? 'absolute' : 'none',
				}}
				className={`absolute right-0 top-3 `}
				onPress={() => {
					setPassVisible(!passVisible);
				}}
			>
				<Text className="uppercase text-sm font-semibold text-gray-500">
					{!passVisible ? 'Hide' : 'Show'}
				</Text>
			</Pressable>
			<Text className="font-bold text-xs text-gray-600 my-3">{hint}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default PasswordInput;
