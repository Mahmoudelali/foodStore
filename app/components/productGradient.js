import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProductGradient = () => {
	return (
		<LinearGradient
			colors={['#ccc', '#fff']}
			start={{ x: 0.1, y: 0 }}
			end={{ x: 0.1, y: 0.4 }}
			className="absolute bottom-0 -left-5 right-0 w-[200%]   h-[135] -rotate-6   bg-white"
		></LinearGradient>
	);
};

export default ProductGradient;
