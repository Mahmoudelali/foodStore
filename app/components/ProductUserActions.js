import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import AddToWhishlist from './AddToWhishlist';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultIconProps = {
	size: 30,
	color: 'gray',
};
const iconPressedProps = {
	color: '#13d0ca',
	size: 30,
};
const AddToBasket = ({ offer }) => {
	const [isClicked, setIsClicked] = useState(null);
	useEffect(() => {
		AsyncStorage.getItem('offers').then((storedOffers) => {
			if (storedOffers) {
				const parsedOffers = JSON.parse(storedOffers);
				parsedOffers.some((off) => off.id === offer.id) &&
					setIsClicked(true);
			} else setIsClicked(false);
		});
	}, [isClicked]);

	const handlePress = async () => {
		const storedOffers = await AsyncStorage.getItem('offers');
		let offers = [];

		if (storedOffers) {
			offers = JSON.parse(storedOffers);
		}
		if (isClicked) {
			const updatedOffers = offers.filter((off) => off.id !== offer.id);
			await AsyncStorage.setItem('offers', JSON.stringify(updatedOffers));
		} else {
			offers.push(offer);
			await AsyncStorage.setItem('offers', JSON.stringify(offers));
		}
		setIsClicked((prevIsClicked) => !prevIsClicked);
	};
	return (
		<Pressable onPress={handlePress}>
			{!isClicked ? (
				<Ionicons name={'cart-outline'} {...defaultIconProps} />
			) : (
				<Ionicons name={'cart'} {...iconPressedProps} />
			)}
		</Pressable>
	);
};

const ProductUserActions = ({ offer }) => {
	return (
		<View className="absolute top-1 -right-2 my-1 mr-3 z-50 flex flex-row">
			<Pressable>
				<Ionicons
					style={styles.iconStyles}
					name="share-social-outline"
				/>
			</Pressable>
			<AddToBasket offer={offer} />
		</View>
	);
};

const styles = StyleSheet.create({
	iconStyles: {
		marginHorizontal: 6,
		fontSize: 26,
		color: 'gray',
	},
	cartIconPressed: {
		color: '#13d0ca',
	},
});

export default ProductUserActions;
