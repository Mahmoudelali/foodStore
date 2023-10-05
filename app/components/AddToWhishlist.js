import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddToWhishlist = () => {
	const [pressed, handlePress] = useState(false);
	return (
		<Pressable onPress={() => handlePress(!pressed)}>
			<Ionicons
				size="30"
				color={pressed ? 'red' : 'gray'}
				name={pressed ? 'heart' : 'heart-outline'}
			/>
		</Pressable>
	);
};

export default AddToWhishlist;
