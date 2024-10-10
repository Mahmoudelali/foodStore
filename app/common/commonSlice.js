import { createSlice } from '@reduxjs/toolkit';

export const common = createSlice({
	name: 'common',
	initialState: {
		toaster: null,
	},
	reducers: {
		showToaster: (state, action) => {
			console.log('toaster fired');
		},
	},
});

export const { showToaster } = common.actions;

export default common.reducer;
