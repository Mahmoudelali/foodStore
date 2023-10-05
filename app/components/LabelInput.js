import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LabelInput = ({
	placeholder,
	errLabel,
	labelText,
	keyboardType,
	extraComponent,
	inputHandler,
	secureTextEntry,
	borderStyle,
	state,
}) => {
	const [focused, setFocused] = useState(false);
	return (
		<View className="my-1">
			<Text className="uppercase font-bold text-xs text-gray-500 mt-3 mb-1">
				{!state ? labelText : state && state.length > 0 && labelText}
			</Text>
			<TextInput
				style={
					!focused && borderStyle === 'underline'
						? styles.underLine
						: focused && borderStyle === 'underline'
						? styles.underLineFocused
						: focused && borderStyle !== 'underline'
						? styles.dashedFocused
						: styles.dahsed
				}
				onChangeText={inputHandler}
				keyboardType={keyboardType}
				className={'px-3 py-3'}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				secureTextEntry={secureTextEntry ? true : false}
				placeholder={placeholder && placeholder}
			/>
			{extraComponent && extraComponent}
			{errLabel && (
				<Text className="text-red-800 text-xs">{errLabel}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	underLine: {
		borderStyle: 'solid',
		borderBottomWidth: 1,
	},
	paddingLeftZero: {
		paddingLeft: 0,
	},
	underLine: {
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderColor: 'black',
	},
	underLineFocused: {
		borderColor: '#13d0ca',
		borderStyle: 'solid',
		borderBottomWidth: 2,
	},
	dahsed: {
		borderStyle: 'dashed',
		borderWidth: 2,
		borderColor: 'gray',
	},
	dashedFocused: {
		borderStyle: 'dashed',
		borderWidth: 2,
		borderColor: '#13d0ca',
	},
});
export default LabelInput;
