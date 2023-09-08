import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
const textComponents = [
	{
		text: 'Deals',
		id: 1,
	},
	{
		text: 'Sort By',
		id: 2,
	},
	{
		text: 'Price',
		id: 3,
	},
	{
		text: 'Distance',
		id: 4,
	},
];

const AccessBar = () => {
	return (
		<View className="bg-white py-2 mb-3 flex-row justify-center border-b-2 border-gray-300 ">
			{textComponents.map(({ text }, index) => (
				<View style={styles.AccessBarBorder} key={index}>
					<Text style={styles.textStyles}>{text}</Text>
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
