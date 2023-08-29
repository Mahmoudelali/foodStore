import React from 'react';
import { View, Text } from 'react-native';

const NotFound = () => {
	return (
		<View className="h-72 flex items-center justify-end">
			<Text>Sorry, No Offers Found! </Text>
			<Text>Double Check Soon! </Text>
		</View>
	);
};

export default NotFound;
