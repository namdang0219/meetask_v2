import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import globalSlice from "./global/globalSlice";
import categorySlice from "./category/categorySlice";
import taskSlice from "./task/taskSlice";

export const reducer = combineReducers({
	global: globalSlice,
	user: userSlice,
	category: categorySlice,
	task: taskSlice,
});
