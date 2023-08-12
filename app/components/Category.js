import React from 'react';
import { View, StyleSheet, Pressable, Image, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Category = ({ categoryName, image, onPress }) => {
	const navigation = useNavigation();

	const icon =
		image === 'beautyAndSpa'
			? require('../assets/beautyAndSpa.jpg')
			: image === 'sports'
			? require('../assets/bicycle.jpg')
			: image === 'electronics'
			? require('../assets/electricals.jpg')
			: image === 'appliances'
			? require('../assets/electronics.jpg')
			: image === 'chill'
			? require('../assets/umbrella.jpg')
			: require('../assets/foodDrinks.jpg');

	return (
		<>
			<Pressable
				onPress={onPress}
				className="p-2 flex flex-row w-full min-h-[90] mb-3 bg-white h-24 justify-center items-center"
			>
				<View className="ml-1 px-1 my-auto w-1/2">
					<Text className="uppercase pl-2  tracking-widest font-bold">
						{categoryName}
					</Text>
				</View>
				<View className="w-[28%] max-h-[70] ml-auto">
					<Image source={icon} style={styles.imageStyles} />
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
		maxWidth: '100%',
		height: '100%',
		objectFit: 'contain',
	},
	iconStyles: {
		fontSize: 26,
		color: '#13d0ca',
	},
});

export default Category;
