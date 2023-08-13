import React from 'react';
import { View, StyleSheet, Pressable, Image, Text, Alert } from 'react-native';

const BasketItem = ({ image, title, placeName, price }) => {
	return (
		<Pressable onPress={() => Alert.alert('pressed')} className="p-2">
			<View className="flex flex-row h-28 bg-white p-2">
				<View className=" w-[30%]">
					<Image
						source={{
							uri: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
						}}
						alt="food image"
						resizeMode={'cover'}
						style={styles.imageStyles}
					/>
				</View>

				<View className="ml-1 px-1 basis-[65%] flex justify-evenly">
					<Text className="font-bold">{price || '$ 20.00'}</Text>
					<View className="self-start">
						<Text className="text-xs">
							20% discount on sea food dishes
						</Text>

						<Text className="text-md  text-accent-100 uppercase font-semibold ">
							RestoName
						</Text>
						<Text className="text-sm text-gray-500 ">
							lorem lorem
						</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	imageStyles: {
		maxWidth: '100%',
		height: '100%',
		objectFit: 'cover',
	},
});

export default BasketItem;
