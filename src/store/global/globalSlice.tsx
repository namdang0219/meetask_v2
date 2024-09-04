import { createSlice } from "@reduxjs/toolkit";
import { categoryMocks } from "mock/categoryMocks";

const initialState = {
	darkMode: false,
	drawerCategory: "Home",
	showBottomSheet: false,
	categories: categoryMocks,
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		toggleDarkMode: (state) => ({
			...state,
			darkMode: !state.darkMode,
		}),
		setDrawerCategory: (state, action) => ({
			...state,
			drawerCategory: action.payload,
		}),
		toggleBottomSheet: (state, action) => ({
			...state,
			showBottomSheet: action.payload,
		}),
		addCatetory: (state, action) => ({
			...state,
			categories: [...state.categories, action.payload],
		}),
		removeCategory: (state, action) => ({
			...state,
			categories: state.categories.filter(
				(category) => category.cid !== action.payload
			),
		}),
	},
});

export const { toggleDarkMode, setDrawerCategory, toggleBottomSheet } =
	globalSlice.actions;

export default globalSlice.reducer;
