import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const Switcher = ({ isEnabled }) => {
	const [enabled, setEnabled] = useState(isEnabled);
	return (
		<Pressable
			onPress={() => {
				setEnabled(!enabled);
			}}
			className="h-4 bg-gray-300 w-10 rounded-xl flex justify-center transition-all	"
			style={enabled ? styles.switcherEnabled : styles.switcherDisabled}
		>
			<View
				className="h-5 w-5  rounded-[50%]"
				style={enabled ? styles.enabledBGColor : styles.disabledBGColor}
			></View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	switcherEnabled: {
		alignItems: 'flex-end',
	},
	switcherDisabled: {
		alignItems: 'flex-start',
	},
	enabledBGColor: {
		backgroundColor: '#32CD32',
	},
	disabledBGColor: {
		backgroundColor: '#bbb',
	},
});

export default Switcher;
