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
	return (
		<View>
			<Text className="uppercase font-bold text-xs text-gray-600 mt-3 mb-1">
				{state.length > 0 && labelText}
			</Text>
			<TextInput
				style={
					(borderStyle == 'underline' && styles.paddingLZero,
					borderStyle === 'underline' && styles.underLine)
				}
				onChangeText={inputHandler}
				keyboardType={keyboardType}
				className={
					!borderStyle === 'underline'
						? 'py-3 border-2 border-dashed border-gray-400 px-3 '
						: 'py-3 border-b-2 border-gray-600 px-3'
				}
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
	},
	paddingLZero: {
		paddingLeft: 0,
	},
});
export default LabelInput;
