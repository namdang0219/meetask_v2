import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: false,
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		toggleDarkMode: (state) => ({
			...state,
			darkMode: !state.darkMode,
		}),
	},
});

export const { toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
