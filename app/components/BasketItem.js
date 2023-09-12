import React from 'react';
import { View, StyleSheet, Pressable, Image, Text, Alert } from 'react-native';

const BasketItem = ({
	image,
	highlights,
	placeName,
	price,
	location,
	pressHandler,
}) => {
	return (
		<Pressable onPress={pressHandler} className="p-2">
			<View className="flex flex-row h-28 bg-white p-2 ">
				<View className=" w-[30%] h-30 ">
					<Image
						source={{
							uri: image,
						}}
						alt="food image"
						resizeMode={'cover'}
						style={styles.imageStyles}
					/>
				</View>

				<View className="ml-1 px-1 basis-[65%] flex justify-evenly">
					<Text className="font-bold">$ {price}</Text>
					<View className="self-start">
						<Text className="text-xs text-gray-500">
							{highlights}
						</Text>

						<Text>
							<Text className="text-md  text-accent-100 uppercase font-semibold ">
								{placeName}
							</Text>
							<Text className="text-sm text-gray-500 ">
								{location}
							</Text>
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
