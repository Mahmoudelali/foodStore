import { createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

export const common = createSlice({
	name: 'common',
	toastVisibilityTime: 3000,
	initialState: {
		toaster: null,
		test: '123',
	},
	reducers: {
		showToaster: (state, action) => {
			Toast.show({
				type: 'success',
				text1: 'label1',
				text2: 'label2',
			});
		},
	},
});

export const { showToaster } = common.actions;

export default common.reducer;
