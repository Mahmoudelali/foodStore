import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Feedback = ({ feedbacks }) => {
	return (
		<View className="py-2 px-5">
			{!feedbacks ? (
				<Text className="text-gray-500">
					No Available feedbacks for this Product
				</Text>
			) : (
				feedbacks.map(({ userImage, userName, feed }) => (
					<View className="flex flex-row">
						<View className="h-12 w-12 rounded-[50%]  bg-red-400 mt-1">
							<Text>{userImage}</Text>
						</View>
						<View className="ml-2 ">
							<Text className="text-black text-lg">
								{userName}
							</Text>
							<Text className="text-gray-500">{feed}</Text>
						</View>
					</View>
				))
			)}
		</View>
	);
};

const styles = StyleSheet.create({});

export default Feedback;
