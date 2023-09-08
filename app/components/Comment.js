import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

const Comment = ({ offer_id, setFeedbacks, feedback_loading, feedbacks }) => {
	const [feedback, setFeedback] = useState('');
	const [error, setError] = useState(false);
	const user_id = 2; //to be changed later

	let req_body = { user_id, offer_id, feedback_content: '' };
	useEffect(() => {
		req_body = { ...req_body, feedback_content: feedback };
	}, [feedback]);
	const feedback_uri = `${process.env.EXPO_PUBLIC_SERVER_URL}api/getalloffers/${offer_id}/provide-feedback`;
	const handlePostFeedback = () => {
		axios
			.post(feedback_uri, req_body)
			.then((response) => {
				console.log(response.data);
				setFeedbacks([...feedbacks, response.data]);
			})
			.catch((error) => console.log(error.message));
	};
	return (
		<View className="mb-4">
			<View className="bg-gray-100 px-4 py-6 flex flex-row gap-x-2">
				<TextInput
					className="bg-white w-[85%] pl-2"
					keyboardType="default"
					placeholder="Write comment.."
					placeholderTextColor={'gray'}
					multiline={true}
					onChangeText={setFeedback}
				/>
				<Pressable className="" onPress={() => handlePostFeedback()}>
					<MaterialIcons
						name="insert-comment"
						size={26}
						color={'#13d0ca'}
						onPress={() =>
							feedback != ''
								? handlePostFeedback()
								: setError(true)
						}
					/>
				</Pressable>
			</View>
			{error && (
				<Text className="text-red-500 ml-1 font-semibold text-xs">
					Please Provide a valid feedback..
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({});

export default Comment;
