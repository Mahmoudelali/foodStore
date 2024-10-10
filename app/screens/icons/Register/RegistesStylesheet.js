import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../components/css';

const styles = StyleSheet.create({
	labelStyles: {
		backgroundColor: 'transparent',
		color: '#a0a0a0',
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},

	buttonStyle: {
		backgroundColor: 'transparent',
		padding: 0,
		paddingTop: 5,
	},
	submitEnabled: {
		backgroundColor: '#32CD32',
	},
	submitDisabled: {
		backgroundColor: 'lightgrey',
	},
	container: {
		flex: 1,
	},
	dropdownStyles: {
		zIndex: 50,
		borderRadius: 0,
		borderStyle: 'dashed',
		borderWidth: 2,
		backgroundColor: '#ddd',
		position: 'absolute',
		top: 40,
		left: 0,
		right: 0,
	},
	boxStyles: {
		position: 'relative',
		borderBlockColor: 'gray',
		marginRight: 15,
		borderRadius: 0,
		borderStyle: 'dashed',
		borderWidth: 2,
		maxHeight: 50,
	},
	font: {
		fontFamily: fonts.regular,
		color: colors.gray,
	},
	labelStyles: {
		backgroundColor: 'transparent',
		color: '#a0a0a0',
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	buttonStyle: {
		backgroundColor: 'transparent',
		padding: 0,
		textDecorationLine: 'underline',
	},
});
