import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { fonts } from './css';

import NotificationToggle from './NotificationToggle';
import DealPrices from './DealPrices';
import ProductGradient from './productGradient';
import { useSelector } from 'react-redux';

const ProductCard = ({ item, productScreen, image }) => {
	const navigation = useNavigation();
	const state = useSelector((state) => state.common);
	return (
		<>
			<Text>{state.test}</Text>

			<Pressable
				onPress={
					productScreen
						? () => null
						: () => {
								navigation.push('ProductScreen', {
									product: item.id,
									productScreen: true,
									title: item.title,
								});
						  }
				}
				className={
					!productScreen ? 'max-h-[270] mt-1 mb-2 ' : 'max-h-[320]'
				}
			>
				<LinearGradient
					colors={['#ccc', '#fff']}
					start={{ x: 0, y: 0.2 }}
					end={{ x: 0.9, y: 0.2 }}
				>
					<View
						className="w-full min-h-64 flex flex-row items-center justify-center"
						style={!productScreen && styles.productListScreen}
					>
						<View className="relative w-full h-full overflow-hidden mx-auto">
							<Image
								source={{
									uri: image,
								}}
								alt="food image"
								style={styles.imageStyles}
							/>
							{/* {!productScreen && (
								<CountdownClock
									isPoster={false}
									targetDate={'2024-11-31T23:59:59'}
								/>
							)} */}
							<LinearGradient
								colors={['#c9c9c9', '#eee']}
								start={{ x: 1, y: 0 }}
								end={{ x: 0, y: 0 }}
								className="absolute top-4 right-0"
							>
								<Text
									style={{ fontFamily: fonts.regular }}
									className="px-1 py-1 text-white"
								>
									PREMIUM
								</Text>
							</LinearGradient>
							<ProductGradient
								height={productScreen ? 145 : 120}
								bottom={-2}
								className={productScreen && 'my-0'}
							/>
							<View
								className={
									!productScreen
										? 'absolute -bottom-0 left-0 right-0 w-full h-[150] flex justify-end pb-2 px-2'
										: 'absolute -bottom-0 left-0 right-0 w-full h-[150] flex justify-end pb-2 pl-3 pr-2'
								}
							>
								{productScreen && <NotificationToggle />}
								<View>
									<View className="flex-row gap-7">
										<Text
											style={{
												fontFamily: fonts.regular,
											}}
											className={'text-lg max-w-[260]'}
										>
											{item?.highlights}
										</Text>
										<View>
											<DealPrices
												old_price={item?.old_price}
												new_price={item?.new_price}
												is_hero={true}
											/>
										</View>
									</View>
									<View className="flex flex-row justify-between w-full">
										<View>
											<Text
												style={{
													fontFamily: fonts.regular,
												}}
												className="text-xs mr-2 text-accent-100 uppercase "
											>
												{item?.company.name} -{' '}
												<Text className="text-gray-700">
													{item?.company.city}
												</Text>
											</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
				</LinearGradient>
			</Pressable>
		</>
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

	container: {
		paddingTop: 50,
	},
	crownOutside: {
		top: 10,
	},
	crownInside: {
		top: 50,
		width: 50,
		height: 35,
		paddingLeft: 10,
	},
});

export default ProductCard;
