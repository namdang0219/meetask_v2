import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import globalSlice from "./global/globalSlice";
import categorySlice from './category/categorySlice';

export const reducer = combineReducers({
	global: globalSlice,
	user: userSlice,
	category: categorySlice
});
