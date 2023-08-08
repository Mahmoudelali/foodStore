import React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
import AddToWhishlist from './AddToWhishlist';
import { Ionicons } from '@expo/vector-icons';
const iconStyles = {
	size: 30,
	color: 'gray',
};
const ProductUserActions = () => {
	return (
		<View className="absolute top-0 right-0 my-1 mr-3 gap-x-2 z-50 flex flex-row">
			<AddToWhishlist />
			<Pressable>
				<Ionicons {...iconStyles} name="share-social-outline" />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ProductUserActions;
