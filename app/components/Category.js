import React from 'react';
import { View, StyleSheet, Pressable, Image, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Category = ({ categoryName, image, onPress }) => {
	return (
		<>
			<Pressable
				onPress={onPress}
				className="p-2 flex flex-row w-full min-h-[90] mb-3 bg-white h-24 justify-center items-center"
			>
				<View className="ml-1 px-1 my-auto w-1/2">
					<Text className="uppercase pl-2 tracking-widest font-bold text-gray-600 text-xs">
						{categoryName}
					</Text>
				</View>
				<View className="ml-auto">
					<Image source={{ uri: image }} style={styles.imageStyles} />
				</View>

				<View className="flex justify-center ml-auto">
					<MaterialIcons
						name="keyboard-arrow-right"
						style={styles.iconStyles}
					/>
				</View>
			</Pressable>
		</>
	);
};

const styles = StyleSheet.create({
	imageStyles: {
		width: 90,
		height: 80,
		objectFit: 'contain',
	},
	iconStyles: {
		fontSize: 26,
		color: '#13d0ca',
	},
});

export default Category;
