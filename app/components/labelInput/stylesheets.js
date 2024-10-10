import { StyleSheet } from 'react-native';
import { fonts, colors } from '../css';

export default StyleSheet.create({
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
	font: {
		fontFamily: fonts.regular,
		color: colors.gray,
	},
});
