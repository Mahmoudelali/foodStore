import React from 'react';
import { Alert, Pressable } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const iconStyles = {
	size: 26,
	color: '#13d0ca',
};

const WishBox = ({ restoName, offer, initialPrice, dealPrice, navigation }) => {
	return (
		<Pressable
			onPress={() => Alert.alert('hi')}
			className="p-1 flex flex-row w-fullmin-h-[90] mb-3 bg-white"
		>
			<View className="basis-[28%] max-h-[100]">
				<Image
					source={{
						uri: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
					}}
					alt="food image"
					resizeMode={'cover'}
					style={styles.imageStyles}
				/>
			</View>

			<View className="ml-1 px-1 basis-[65%]">
				<View className="self-start">
					<Text className="text-sm">
						20% discount on sea food dishes
					</Text>
					<Text>
						<Text className="text-md  text-accent-100 uppercase font-semibold ">
							RestoName
						</Text>
						<Text className="text-xs text-gray-500 ">
							{' '}
							lorem lorem
						</Text>
					</Text>
				</View>
				<View className="flex flex-row items-center justify-between mt-2">
					<View>
						<Text className="text-xs uppercase">Deal Price</Text>
						<Text>
							<Text className="line-through">100$</Text> -
							<Text className="text-accent-100"> 80$</Text>
						</Text>
					</View>
					<Pressable className="bg-accent-100 py-2 px-4">
						<Text className="uppercase  text-white font-semibold tracking-wider">
							buy
						</Text>
					</Pressable>
				</View>
			</View>
			<View className="flex justify-center items-center basis-[5%]  ml-auto">
				<MaterialIcons name="keyboard-arrow-right" {...iconStyles} />
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

export default WishBox;
