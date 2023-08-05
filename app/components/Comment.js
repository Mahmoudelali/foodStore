import React from 'react';
import { Pressable, View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Comment = () => {
	return (
		<View className="bg-gray-100 px-4 py-6 flex flex-row gap-x-2 mb-4">
			<TextInput
				className="bg-white w-[85%] pl-2"
				keyboardType="default"
				placeholder="Write comment.."
				placeholderTextColor={'gray'}
				multiline={true}
			/>
			<Pressable className="">
				<MaterialIcons
					name="insert-comment"
					size={26}
					color={'#32CD32'}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Comment;
