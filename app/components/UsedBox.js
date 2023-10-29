import React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CardDealPrices from './cardDealPrices';
import { useNavigation } from '@react-navigation/native';

const iconStyles = {
	size: 26,
	color: '#13d0ca',
};

const OrderBox = ({ offer, status, qr_code }) => {
	const image = process.env.EXPO_PUBLIC_SERVER_URL + offer.main_picture;
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={() =>
				navigation.navigate('ProductScreen', {
					product: offer.id,
					qr_code,
				})
			}
			className="p-1 flex flex-row w-[95%] min-h-[90] mx-auto my-1  bg-white border-dashed border-2 border-gray-300"
		>
			<View className="absolute top-4 right-4 z-20 ">
				<View
					className="h-2 w-2"
					style={{
						backgroundColor:
							status == 'pending'
								? 'gold'
								: status == 'active'
								? 'lightgreen'
								: '#13d0ca',
						borderRadius: 50,
					}}
				/>
			</View>
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
