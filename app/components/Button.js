import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default Button = ({ label, onPress, buttonStyle, textStyle }) => {
	return (
		<Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
			<Text style={[styles.text, textStyle]}>{label}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#007BFF', // Default button color, change it as needed
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#FFFFFF', // Default text color, change it as needed
		fontSize: 16,
		fontWeight: 'bold',
	},
});
