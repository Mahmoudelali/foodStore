import React from 'react';
import { Alert, Pressable } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CardDealPrices from './cardDealPrices';
import { uri } from '../index.js';

const iconStyles = {
	size: 26,
	color: '#13d0ca',
};

const OrderBox = ({ offer }) => {
	const image = uri + offer.main_picture;
	console.log(image);
	return (
		<Pressable
			onPress={() => Alert.alert('hi')}
			className="p-1 flex flex-row w-[95%] min-h-[90] mx-auto my-1  bg-white border-dashed border-2 border-gray-300"
		>
			<View className="basis-[30%] max-h-[100]">
				<Image
					source={{ uri: image }} //to be edited
					alt="food image"
					resizeMode={'cover'}
					style={styles.imageStyles}
				/>
			</View>

			<View className="ml-1 px-1 basis-[65%] mt-2">
				<CardDealPrices
					old_price={offer.old_price}
					new_price={offer.new_price}
				/>
				<View className="self-start ">
					<Text className="text-xs font-normal">
						{offer.highlights}
					</Text>
					<Text>
						<Text className="text-[12px]  text-accent-100  font-semibold">
							{offer.company.name}
						</Text>
						<Text className="text-[10px] text-gray-400 ">
							{' '}
							{offer.company.name}
						</Text>
					</Text>
				</View>
			</View>
			<View className="flex justify-center items-center basis-[7%]  ml-auto">
				<MaterialIcons name="keyboard-arrow-right" {...iconStyles} />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	imageStyles: {
		maxWidth: 100,
		height: 100,
		objectFit: 'cover',
	},
});

export default OrderBox;
