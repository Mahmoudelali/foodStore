import { configureStore } from '@reduxjs/toolkit';
import common from './common/commonSlice';

export default configureStore({
	reducer: { common: common },
});
