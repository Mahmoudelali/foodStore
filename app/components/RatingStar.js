import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingStar = ({ rating, size }) => {
	const handleRating = (rating) => {
		return rating > 4
			? 'green'
			: rating > 3
			? 'lightgreen'
			: rating > 2
			? 'yellowgreen'
			: rating > 1
			? 'orangered'
			: 'red';
	};
	return (
		<View className="pt-0.5 pr-1 ">
			<Ionicons color={handleRating(rating)} size={size} name={'star'} />
		</View>
	);
};

export default RatingStar;
