import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Note = ({ text }) => {
	return (
		<View className="flex flex-row items-center my-1">
			<View className="w-3 h-3 rounded-[50%] bg-accent-100 mr-2" />
			<Text className="text-xs">{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Note;
