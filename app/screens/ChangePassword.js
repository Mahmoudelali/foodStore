import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LabelInput from '../components/LabelInput';
import Note from '../components/note';
import Button from '../components/Button';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ChangePassword = ({ navigation }) => {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const labelInputProps = [
		{
			placeholder: 'current password',
			borderStyle: 'underline',
			inputHandler: setOldPassword,
			state: oldPassword,
			labelText: 'current password',
		},
		{
			placeholder: 'New password',
			borderStyle: 'underline',
			inputHandler: setNewPassword,
			state: newPassword,
			labelText: 'New password',
			secureTextEntry: true,
		},
	];

	return (
		<ScrollView className="p-4" keyboardDismissMode="on-drag">
			<View className="bg-white px-3 py-4">
				{labelInputProps.map((props, index) => (
					<LabelInput key={index} {...props} />
				))}

				<View className="mt-3">
					<Note text={'6 characters minimun'} />
					<Note text={'1 number required'} />
				</View>
			</View>
			<Button
				label="save Password"
				onPress={() => {
					if (!newPassword.match(/^(?=.*[0-9]).{6,}$/)) {
						Alert.alert('password must contain at least 1 number');
					} else {
						Alert.alert('password changed');
					}
				}}
				buttonStyle={{
					marginTop: 20,
					backgroundColor:
						newPassword.length < 6 || oldPassword.length < 6 ? 'lightgray' : '#13d0ca',
				}}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({});

export default ChangePassword;
