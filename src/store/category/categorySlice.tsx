import { createSlice } from "@reduxjs/toolkit";
import { categoryMocks } from "mock/categoryMocks";
import { CategoryType } from "utils/types/dataTypes";

const initialState: CategoryType[] = [...categoryMocks];

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		addCategory: (state, action) => {
			state.push(action.payload);
		},
		removeCategory: (state, action) => {
			state = state.filter((category) => category.cid !== action.payload);
		},
	},
});

export const { addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
