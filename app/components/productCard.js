import React from 'react';
import { View, StyleSheet, Text, Image, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Switcher from './Switcher';
import ProductGradient from './productGradient';
import { useNavigation } from '@react-navigation/native';
import ProductUserActions from './ProductUserActions';
import NotificationToggle from './NotificationToggle';

export const DealPrices = ({ is_hero, old_price, new_price }) => (
	<View className="self-end">
		<Text
			className={
				!is_hero && 'text-[10px] uppercase text-right font-bold mb-0'
			}
		>
			Deal Price
		</Text>
		<Text
			className={!is_hero ? ' text-[9px] font-bold' : 'text-sm font-bold'}
		>
			<Text className="text-accent-100">{old_price}$</Text>
			{' - '}
			<Text>{new_price}$</Text>
		</Text>
	</View>
);
const ProductCard = ({ item, productScreen }) => {
	console.log(item);
	const navigation = useNavigation();

	return (
		<>
			<Pressable
				onPress={() => {
					navigation.navigate('ProductScreen', {
						product: item.id,
						productScreen: true,
					});
				}}
				className={
					!productScreen
						? 'max-h-[220] w-[49%]'
						: 'max-h-[270] w-screen'
				}
			>
				<LinearGradient
					colors={['#ccc', '#fff']}
					start={{ x: 0, y: 0.2 }}
					end={{ x: 0.9, y: 0.2 }}
				>
					{productScreen && <ProductUserActions />}
					<View
						className="w-full min-h-64 flex flex-row items-center justify-center"
						style={
							productScreen && productScreen
								? styles.productScreen
								: styles.productListScreen
						}
					>
						<View className="relative w-full h-full overflow-hidden mx-auto ">
							<Image
								source={{
									uri: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
								}}
								alt="food image"
								resizeMode={'cover'}
								style={styles.imageStyles}
							/>
							<ProductGradient
								height={!productScreen ? 80 : 110}
								bottom={10}
							/>
							<View
								className={
									!productScreen
										? 'absolute -bottom-0 left-0 right-0 w-full h-[150] flex justify-end gap-y-1 py-1 px-2'
										: 'absolute -bottom-0 left-0 right-0 w-full h-[150] flex justify-end gap-y-1 py-1 pl-3 pr-2'
								}
							>
								<DealPrices
									old_price={item.old_price}
									new_price={item.new_price}
									is_hero={productScreen ? true : false}
								/>

								{productScreen && <NotificationToggle />}
								<View className="self-start">
									<Text
										className={
											!productScreen
												? 'text-xs'
												: 'text-sm'
										}
									>
										{item.highlights}
									</Text>
									<Text>
										<Text
											className={
												!productScreen
													? 'text-[12px] text-accent-100 uppercase '
													: 'text-[16px] font-semibold mr-2 text-accent-100 uppercase '
											}
										>
											{item.company.name}{' '}
										</Text>
										<Text className="text-xs text-gray-500 ">
											{item.company.city}
										</Text>
									</Text>
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
});
export default ProductCard;
