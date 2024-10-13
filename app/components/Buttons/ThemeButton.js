import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { fonts } from '../css';

export default ThemeButton = ({
	label,
	onPress,
	buttonStyle,
	textStyle,
	disabled,
}) => {
	const handlePress = () => {
		if (onPress) onPress();
	};

	return (
		<View>
			<Pressable
				style={
					buttonStyle ? [styles.button, buttonStyle] : styles.button
				}
				disabled={disabled}
				onPress={handlePress}
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
