import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const textComponents = [
	{
		text: 'Deals',
	},
	{
		text: 'Sort By',
	},
	{
		text: 'Price',
	},
	{
		text: 'Distance',
	},
];
const AccessBar = () => {
	return (
		<View className="bg-white py-2 mb-3 flex-row justify-center border-b-2 border-gray-300 ">
			{textComponents.map((item) => (
				<View style={styles.AccessBarBorder}>
					<Text style={styles.textStyles}>{item.text}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	AccessBarBorder: {
		paddingVertical: 5,
		marginHorizontal: 5,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 1,
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
	},
	textStyles: {
		textAlign: 'center',
		color: 'gray',
		paddingHorizontal: 12,
	},
});

export default AccessBar;
