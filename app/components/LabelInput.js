import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

const LabelInput = ({
	errLabel,
	labelText,
	keyboardType,
	extraComponent,
	inputHandler,
	secureTextEntry,
	validate,
}) => {
	return (
		<View>
			<Text className="uppercase font-bold text-xs text-gray-600 my-3">
				{labelText}
			</Text>
			<TextInput
				// onEndEditing={validate}
				onChangeText={inputHandler}
				keyboardType={keyboardType}
				className="py-3 border-2 border-dashed border-gray-400 px-3 "
				secureTextEntry={secureTextEntry ? true : false}
			/>
			{extraComponent && extraComponent}
			{errLabel && (
				<Text className="text-red-800 text-xs">{errLabel}</Text>
			)}
		</View>
	);
};

export default LabelInput;
