import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import AddToWhishlist from './AddToWhishlist';
import { Ionicons } from '@expo/vector-icons';

const AddToBasket = () => {
	const [pressed, handlePress] = useState(false);
	return (
		<Pressable onPress={() => handlePress(!pressed)}>
			<Ionicons
				name={pressed ? 'cart-outline' : 'cart'}
				style={
					pressed
						? styles.iconStyles
						: [styles.iconStyles, styles.cartIconPressed]
				}
			/>
		</Pressable>
	);
};
const ProductUserActions = () => {
	return (
		<View className="absolute top-1 -right-2 my-1 mr-3 z-50 flex flex-row">
			<Pressable>
				<Ionicons
					style={styles.iconStyles}
					name="share-social-outline"
				/>
			</Pressable>
			<AddToWhishlist />
			<AddToBasket />
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
