import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { fonts } from './css';

export default Button = ({
	error,
	label,
	onPress,
	buttonStyle,
	textStyle,
	disabled,
}) => {
	return (
		<View>
			<Pressable
				style={
					buttonStyle ? [styles.button, buttonStyle] : styles.button
				}
				disabled={disabled}
				onPress={onPress}
			>
				<Text
					style={[
						textStyle ? textStyle : styles.text,
						{ fontFamily: fonts.regular },
					]}
				>
					{label}
				</Text>
			</Pressable>
			{error && (
				<Text
					style={{ fontFamily: fonts.regular }}
					className="text-xs text-red-700 mt-1"
				>
					All field must be filled!
				</Text>
			)}
		</View>
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
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});
