import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { uri } from '../index.js';
import ProductUserActions from './ProductUserActions';
import NotificationToggle from './NotificationToggle';
import CrownIcon from './CrownIcon';
import RatingStar from './RatingStar';
import DealPrices from './DealPrices';
import ProductGradient from './productGradient';
import CountdownClock from './CounterClock';

const ProductCard = ({ item, productScreen }) => {
	const navigation = useNavigation();
	const image = `${uri + item?.main_picture}`;

	return (
		<>
			<Pressable
				onPress={() => {
					navigation.push('ProductScreen', {
						product: item.id,
						productScreen: true,
					});
				}}
				className={
					!productScreen
						? 'max-h-[220] w-[49%] my-1'
						: 'max-h-[270] w-screen'
				}
			>
				<LinearGradient
					colors={['#ccc', '#fff']}
					start={{ x: 0, y: 0.2 }}
					end={{ x: 0.9, y: 0.2 }}
				>
					{productScreen && <ProductUserActions offer={item} />}

					<View
						className="w-full min-h-64 flex flex-row items-center justify-center"
						style={
							productScreen && productScreen
								? styles.productScreen
								: styles.productListScreen
						}
					>
						<View className="relative w-full h-full overflow-hidden mx-auto">
							<Image
								source={{
									uri: !productScreen
										? image
										: item?.main_picture,
								}}
								alt="food image"
								resizeMode={'cover'}
								style={styles.imageStyles}
							/>
							{!productScreen && (
								<CountdownClock
									isPoster={false}
									targetDate={'2023-10-31T23:59:59'}
								/>
							)}
							{item.isVip && (
								<View
									className="absolute right-0 flex flex-row items-center bg-[#FFD700] min-w-[30] rounded-bl-md rounded-tl-md pl-1"
									style={
										productScreen
											? styles.crownInside
											: styles.crownOutside
									}
								>
									<CrownIcon />
								</View>
							)}

							<ProductGradient
								height={!productScreen ? 90 : 120}
								bottom={!productScreen ? -1 : -4}
							/>
							<View
								className={
									!productScreen
										? 'absolute -bottom-0 left-0 right-0 w-full h-[150] flex justify-end gap-y pb-1 px-2'
										: 'absolute -bottom-0 left-0 right-0 w-full h-[150] flex justify-end gap-y pb-1 pl-3 pr-2'
								}
							>
								<DealPrices
									old_price={item.old_price}
									new_price={item.new_price}
									is_hero={productScreen ? true : false}
								/>

								{productScreen && <NotificationToggle />}

								<View className="self-start">
									{!productScreen && (
										<Text
											className={
												!productScreen
													? 'text-xs'
													: 'text-sm'
											}
										>
											{!item.highlights}
										</Text>
									)}
									<View>
										<Text
											className={
												!productScreen
													? 'text-[12px] text-accent-100 uppercase'
													: 'text-[16px] font-semibold mr-2 text-accent-100 uppercase '
											}
										>
											{item.company.name}{' '}
										</Text>
										<View className="flex flex-row">
											<Text className="text-xs text-gray-500  ">
												{item.company.city}
											</Text>
											<RatingStar
												rating={item.company.review}
												size={15}
											/>
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
