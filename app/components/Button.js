import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default Button = ({ label, onPress, buttonStyle, textStyle }) => {
	return (
		<Pressable
			style={buttonStyle ? [styles.button, buttonStyle] : styles.button}
			onPress={onPress}
		>
			<Text style={textStyle ? textStyle : styles.text}>{label}</Text>
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
