import React, { useContext, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import AddToWhishlist from './AddToWhishlist';
import { Ionicons } from '@expo/vector-icons';
import { BasketContext } from '../index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToBasket = ({ offer }) => {
	// const [pressed, handlePress] = useState(basket.includes(offer));
	const [isClicked, setIsClicked] = useState(false);

	 const handlePress = async() => {
		const data = JSON.parse(await AsyncStorage.getItem("MyBasket")) || [];
		const isProductInBasket = data.some((item) => item.id === offer.id);
	  
		if (isProductInBasket) {
		  const updatedBasket = data.filter((item) => item.id !== offer.id);
		  await AsyncStorage.setItem("MyBasket", JSON.stringify(updatedBasket));
		} else {
		  data.push(offer);
		  await AsyncStorage.setItem("MyBasket", JSON.stringify(data));
		}
	  
		setIsClicked(!isProductInBasket);
	}

	useEffect(() => {
		(async () => {
		  const data = JSON.parse(await AsyncStorage.getItem("MyBasket")) || [];
		  const isProductInBasket = data.some((item) => item.id === offer.id);
		  setIsClicked(isProductInBasket);
		})();
	  }, [offer.id]);
	
	
	return (
		<Pressable onPress={handlePress}>
			<Ionicons
				name={isClicked == false ? 'cart-outline' : 'cart'}
				style={
					isClicked == false
						? styles.iconStyles
						: [styles.iconStyles, styles.cartIconPressed]
				}
			/>
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
			<AddToWhishlist />
			<AddToBasket offer={offer} />
		</View>
	);
};

const styles = StyleSheet.create({
	iconStyles: {
		fontSize: 30,
		color: 'gray',
		marginHorizontal: 6,
	},
	cartIconPressed: {
		color: '#13d0ca',
	},
});

export default ProductUserActions;
