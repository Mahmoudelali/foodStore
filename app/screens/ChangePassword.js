import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LabelInput from '../components/LabelInput';
import Note from '../components/note';
import Button from '../components/Button';

import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { UserContext } from '../index.js';
import Toast from 'react-native-toast-message';

const ChangePassword = ({ navigation }) => {
	const [user] = useContext(UserContext);
	const server_uri = process.env.EXPO_PUBLIC_SERVER_URL;
	const [current_password, setOldPassword] = useState('');
	const [new_password, setNewPassword] = useState('');
	console.log(current_password, new_password);
	const labelInputProps = [
		{
			placeholder: 'current password',
			borderStyle: 'underline',
			inputHandler: setOldPassword,
			state: current_password,
			labelText: 'current password',
		},
		{
			placeholder: 'New password',
			borderStyle: 'underline',
			inputHandler: setNewPassword,
			state: new_password,
			labelText: 'New password',
			secureTextEntry: true,
		},
	];
	const showToast = (type, label1, label2) => {
		return Toast.show({
			type: type,
			text1: label1,
			text2: label2 || '',
		});
	};

	const ChangePassword = async () => {
		const change_pass_uri = `${server_uri}auth/users/set_password/`;
		const headers = {
			Authorization: 'Token ' + user.token,
		};

		try {
			await axios.post(
				change_pass_uri,
				{
					current_password,
					new_password,
				},
				{ headers },
			);
			showToast('success', 'passwords updated successfully');
			setTimeout(() => {
				navigation.goBack();
			}, 1000);
		} catch (error) {
			console.log(error.response.data);
			showToast('error', 'Failed to update password');
		}
	};

	return (
		<ScrollView className="p-4" keyboardDismissMode="on-drag">
			<View className="relative z-10">
				<Toast visibilityTime={2000} position="top" topOffset={10} />
			</View>
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
					if (!new_password.match(/^(?=.*[0-9]).{6,}$/)) {
						showToast(
							'error',
							'password must contain one number, and one character',
							'Please try again',
						);
					} else {
						ChangePassword();
						// navigation.goBack();
					}
				}}
				buttonStyle={[
					{
						backgroundColor:
							new_password.length < 6 ||
							current_password.length < 6
								? 'lightgray'
								: '#13d0ca',
					},
					styles.buttonStyle,
				]}
				textStyle={styles.labelStyles}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: '#13d0ca',
		padding: 10,
		marginTop: 20,
	},
	labelStyles: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		textAlign: 'center',
		color: '#fff',
		fontSize: 20,
	},
});

export default ChangePassword;
