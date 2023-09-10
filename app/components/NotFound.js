import React from 'react';
import { View, Text } from 'react-native';

const NotFound = ({ label }) => {
	return label ? (
		<View className="h-72 flex items-center justify-end mx-auto ">
			<Text className="text-lg">{label}</Text>
		</View>
	) : (
		<View className="h-72 flex items-center justify-end mx-auto">
			<Text>{'Sorry, No Offers Found!'}</Text>
			<Text>Double Check Soon! </Text>
			<Text className="font-extrabold tracking-widest text-2xl mt-3">
				404!{' '}
			</Text>
		</View>
	);
};

export default NotFound;
