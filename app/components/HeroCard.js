import React from 'react';
import { View, StyleSheet, Pressable, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProductGradient from './productGradient';
import { DealPrices } from './productCard';
import ProductUserActions from './ProductUserActions';
import Switcher from './Switcher';
import { useNavigation } from '@react-navigation/native';
import { uri } from '../index.js';

const HeroCard = ({ productScreen, item }) => {
	const image = `${uri + item?.main_picture}`;
	console.log(image);
	const navigation = useNavigation();
	console.log(item?.main_picture);
	return (
		<Pressable
			onPress={() => {
				navigation.navigate('ProductScreen', {
					product: item.id,
					productScreen: true,
				});
			}}
			className="py-1"
			style={styles.isModuloFive}
		>
			<LinearGradient
				colors={['#ccc', '#fff']}
				start={{ x: 0, y: 0.2 }}
				end={{ x: 0.9, y: 0.2 }}
			>
				<View
					className="w-full min-h-64 max-h-[280] flex flex-row items-center justify-center "
					style={
						productScreen && productScreen
							? styles.productScreen
							: styles.productListScreen
					}
				>
					<View className="relative w-full h-full overflow-hidden mx-auto">
						{productScreen && (
							<>
								<ProductUserActions />
								<View className="absolute top-10 right-0 z-50 uppercase w-10 h-10">
									<Image
										style={styles.crownStyles}
										source={require('../assets/crown.svg')}
										alt="image"
										resizeMode="contain"
									/>
								</View>
							</>
						)}

						<Image
							source={{
								uri: image,
							}}
							alt="item image"
							resizeMode={'cover'}
							style={styles.imageStyles}
						/>
						<ProductGradient />
						<View className="absolute -bottom-2 left-0 right-0 w-full h-[150] flex justify-center py-1 px-3">
							<DealPrices
								is_hero={true}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
							{productScreen && (
								<View className="flex flex-row items-center">
									<Switcher />
									<Text className="ml-2 text-xs text-gray-400">
										notify me when similar offers available
									</Text>
								</View>
							)}

							<View className="self-start">
								<Text className="text-base text-gray-600 ">
									{item.highlights}
								</Text>
								<Text>
									<Text className="text-md  text-accent-100 uppercase ">
										{item?.company.name}
									</Text>
									<Text className="text-xs text-gray-500 ">
										{' '}
										{item?.location.name}
									</Text>
								</Text>
							</View>
						</View>
						<Text className="text-white">{item?.description}</Text>
					</View>
				</View>
			</LinearGradient>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	isModuloFive: {
		width: '100%',
	},
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
		backgroundColor: 'gray',
	},
	crownStyles: {
		maxWidth: '100%',
		height: '100%',
	},
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 10,
	},
});

export default HeroCard;
