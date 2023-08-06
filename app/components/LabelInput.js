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
		<View>
			<Text className="uppercase font-bold text-xs text-gray-600 mt-3 mb-1">
				{state && state.length > 0 && labelText}
			</Text>
			<TextInput
				style={
					(borderStyle === 'underline' && [
						styles.underLine,
						styles.underLineFocused,
					],
					borderStyle == 'underline' &&
						focused && [styles.underLine, styles.underLineFocused])
				}
				onChangeText={inputHandler}
				keyboardType={keyboardType}
				className={
					!borderStyle === 'underline'
						? 'py-3 border-2 border-dashed border-gray-400 px-3 '
						: 'py-3 border-b-2 border-gray-600 px-3'
				}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				secureTextEntry={secureTextEntry ? true : false}
				placeholder={placeholder && placeholder}
				placeholderTextColor={
					borderStyle === 'underline' ? '#0a0a0a' : 'gray'
				}
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
		borderBottomColor: 'black',
		paddingLeft: 0,
	},
	underLineFocused: {
		borderStyle: 'solid',
		borderBottomWidth: 1,
		borderBottomColor: '#13d0ca',
	},
});
export default LabelInput;
