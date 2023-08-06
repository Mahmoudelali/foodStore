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
		backgroundColor: '#13d0ca',
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	text: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});
