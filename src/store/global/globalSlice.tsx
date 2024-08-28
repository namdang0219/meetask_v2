import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: false,
	drawerCategory: "Home",
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
	},
});

export const { toggleDarkMode, setDrawerCategory } = globalSlice.actions;

export default globalSlice.reducer;
