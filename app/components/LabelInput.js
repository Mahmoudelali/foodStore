import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

const LabelInput = ({
	labelText,
	keyboardType,
	extraComponent,
	inputHandler,
	secureTextEntry,
}) => {
	return (
		<View>
			<Text className="uppercase font-bold text-xs text-gray-600 my-3">
				{labelText}
			</Text>
			<TextInput
				onChangeText={inputHandler}
				keyboardType={keyboardType}
				className="py-3 border-2 border-dashed border-gray-400 px-3 "
				secureTextEntry={secureTextEntry ? true : false}
			/>
			{extraComponent && extraComponent}
		</View>
	);
};

export default LabelInput;
