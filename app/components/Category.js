import React from 'react';
import { View, StyleSheet, Pressable, Image, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Category = ({ categoryName, image }) => {
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

	const iconStyles = {
		size: 26,
		color: '#13d0ca',
	};

	return (
		<Pressable
			onPress={() => Alert.alert('hi')}
			className="p-2 flex flex-row w-full min-h-[90] mb-3 bg-white h-24 justify-center items-center"
		>
			<View className="ml-1 px-1 my-auto w-1/2">
				<Text className="uppercase pl-2  tracking-widest font-bold">
					{categoryName || 'category Name'}
				</Text>
			</View>
			<View className="w-[28%] max-h-[70] ml-auto">
				<Image source={icon} style={styles.imageStyles} />
			</View>

			<View className="flex justify-center ml-auto">
				<MaterialIcons name="keyboard-arrow-right" {...iconStyles} />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	imageStyles: {
		maxWidth: '100%',
		height: '100%',
		objectFit: 'contain',
	},
});

export default Category;
