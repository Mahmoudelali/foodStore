import React from 'react';
import { View, StyleSheet, Text, Image, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Switcher from './Switcher';
import ProductGradient from './productGradient';

const ProductCard = ({
	path,
	imageURI,
	badgeType,
	priceBeforeDiscount,
	priceAfterDiscount,
	RestoLocation,
	productScreen,
}) => {
	return (
		<Pressable
			onPress={() => {
				Alert.alert('clicked');
			}}
		>
			<LinearGradient
				colors={['#ccc', '#fff']}
				start={{ x: 0, y: 0.2 }}
				end={{ x: 0.9, y: 0.2 }}
			>
				<View
					className="w-full min-h-64 max-h-[280]  flex flex-row items-center justify-center"
					style={
						productScreen && productScreen
							? styles.productScreen
							: styles.productListScreen
					}
				>
					<View className="relative w-full h-full overflow-hidden mx-auto">
						<Text className="absolute top-4 right-0 z-10 uppercase bg-gray-300 p-1 text-white">
							Premium
						</Text>
						<Image
							source={{
								uri: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
							}}
							alt="food image"
							resizeMode={'cover'}
							style={styles.imageStyles}
						/>
						<ProductGradient />
						<View className="absolute -bottom-2 left-0 right-0 w-full h-[150] flex justify-center py-1 px-3">
							<View className="self-end">
								<Text className="text-xs uppercase text-right">
									Deal Price
								</Text>
								<Text>
									<Text className="line-through">100$</Text> -
									<Text className="text-accent"> 80$</Text>
								</Text>
							</View>
							{productScreen && (
								<View className="flex flex-row items-center">
									<Switcher />
									<Text className="ml-2 text-xs text-gray-400">
										notify me when similar offers available
									</Text>
								</View>
							)}

							<View className="self-start">
								<Text className="text-lg">
									20% discount on sea food dishes
								</Text>
								<Text>
									<Text className="text-md  text-accent uppercase ">
										RestoLocation
									</Text>
									<Text className="text-xs text-gray-500 ">
										{' '}
										lorem lorem
									</Text>
								</Text>
							</View>
						</View>
						<Text className="text-white">
							lorem ipsum dolor sit amet, consectetur adip
						</Text>
					</View>
				</View>
			</LinearGradient>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	productScreen: {
		padding: 0,
	},
	productListScreen: {
		padding: 6,
	},
	imageStyles: {
		maxWidth: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 10,
	},
});
export default ProductCard;
