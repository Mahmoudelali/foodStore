import React from 'react';
import { View, Text } from 'react-native';
import Switcher from './Switcher';

const NotificationToggle = () => {
	return (
		<View className="flex flex-row items-center">
			<Switcher />
			<Text className="ml-2 text-xs text-gray-400">
				Notify me for similar offers
			</Text>
		</View>
	);
};

export default NotificationToggle;
