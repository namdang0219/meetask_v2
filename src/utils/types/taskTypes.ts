import { categoryMocks } from "mocks";

// Task type
export type TaskType = {
	taskId: string;
	title: string;
	content: string;
	category: "Shopping" | "Business" | "Study" | "School";
	type: "TASK" | "EVENT";
	status: "DONE" | "UNDONE";
	start?: {
		day: string;
		time: string;
	};
	end?: {
		day: string;
		time: string;
	};
};

// Task context type
export type TaskContextType = {
	tasks?: TaskType[];
	addTask?: (task: TaskType) => void;
	removeTask?: (taskId: string) => void;
	updateTask?: (taskId: string, updatedTask: TaskType) => void;
};
