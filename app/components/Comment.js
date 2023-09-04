import React, { useState } from 'react';
import { Pressable, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import axios from 'axios';

const Comment = ({ offer_id }) => {
	const [feedback, setFeedback] = useState(null);
	const feedback_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${offer_id}/provide-feedback`;

	const add_review = () => {
		axios
			.post(feedback_uri, {
				username: 'mahmoud',
				feedback_content: feedback,
				offer: offer_id,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => console.error(error));
	};

	return (
		<View className="bg-gray-100 px-4 py-6 flex flex-row gap-x-2 mb-4">
			<TextInput
				className="bg-white w-[85%] pl-2"
				keyboardType="default"
				placeholder="Write comment.."
				placeholderTextColor={'gray'}
				multiline={true}
				onChangeText={setFeedback}
			/>
			<Pressable className="" onPress={() => Alert.alert('Hi')}>
				<MaterialIcons
					name="insert-comment"
					size={26}
					color={'#13d0ca'}
					onPress={() => add_review()}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Comment;
