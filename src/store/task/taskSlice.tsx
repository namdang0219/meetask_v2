import { createSlice } from "@reduxjs/toolkit";
import { taskMocks } from "mock/taskMocks";

const initialState = taskMocks;

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
		},
		removeTask: (state, action) => {
			state = state.filter((task) => task.tid !== action.payload);
		},
	},
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
