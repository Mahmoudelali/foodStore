import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { colors, fonts } from '../css';
import inputStyles from './stylesheets';
const LabelInput = ({
	placeholder,
	errLabel,
	labelText: title,
	keyboardType,
	extraComponent,
	inputHandler,
	secureTextEntry,
	borderStyle,
	editable,
}) => {
	const [focused, setFocused] = useState(false);

	const handleChangeText = (e) => {
		if (inputHandler) inputHandler(e);
	};

	const handleFocus = () => {
		setFocused(!focused);
	};

	const renderExtraComponent = () => {
		if (extraComponent) return extraComponent;
	};

	const handleInputStyle = () => {
		return !focused && borderStyle === 'underline'
			? inputStyles.underLine
			: focused && borderStyle === 'underline'
			? inputStyles.underLineFocused
			: focused && borderStyle !== 'underline'
			? inputStyles.dashedFocused
			: inputStyles.dahsed;
	};

	return (
		<View className="my-1">
			<Text
				style={inputStyles.font}
				className="uppercase text-xs  mt-3 mb-1"
			>
				{title}
			</Text>
			<TextInput
				style={handleInputStyle()}
				onChangeText={handleChangeText}
				keyboardType={keyboardType}
				className={'px-3 py-3'}
				onFocus={handleFocus}
				onBlur={handleFocus}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor={colors.gray}
				editable={editable}
			/>
			{renderExtraComponent()}
			{errLabel && (
				<Text
					className="text-red-800 text-xs"
					style={{ fontFamily: fonts.regular }}
				>
					{errLabel}
				</Text>
			)}
		</View>
	);
};

export default LabelInput;
