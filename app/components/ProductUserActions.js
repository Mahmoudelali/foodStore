import React, { useContext, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import AddToWhishlist from './AddToWhishlist';
import { Ionicons } from '@expo/vector-icons';
import { BasketContext } from '../index.js';

const AddToBasket = ({ offer }) => {
	const [basket, setBasket] = useContext(BasketContext);
	// const [pressed, handlePress] = useState(basket.includes(offer));
	const [isClicked, setIsClicked] = useState(false);
	console.log("basketttt", JSON.stringify(basket, null, 2));
	const handlePress = () => {
		let basketObj = [...basket];
		if (isClicked) { 
			basketObj = basketObj.filter(b => b.id != offer.id);
			setIsClicked(false)
		} else {
			basketObj.push(offer);
			
		}
		setBasket(basketObj);
	}
	useEffect(() => {
		if (!basket) return;
		if (basket.find(b => b.id === offer.id)) setIsClicked(true);
	},[basket])
	return (
		<Pressable
			onPress={handlePress }
		>
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
