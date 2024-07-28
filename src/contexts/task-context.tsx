import { createContext, ReactNode, useContext, useState } from "react";
import { ViewProps } from "react-native";

// declare types
type TaskType = {
	taskId: string;
	title: string;
	description: string;
	content: string;
	category: string;
	type: "TASK" | "EVENT";
	status: "DONT" | "UNDONE";
	start?: {
		day: string;
		time: string;
	};
	end?: {
		day: string;
		time: string;
	};
};

type TaskContextType = {
	tasks?: TaskType[];
	addTask?: (task: TaskType) => void;
	removeTask?: (taskId: string) => void;
	updateTask?: (taskId: string, updatedTask: TaskType) => void;
};

// Create context
const TaskContext = createContext<TaskContextType>({});

// Create Provider
const TaskProvider = ({ children }: ViewProps) => {
	const [tasks, setTasks] = useState<TaskType[]>([]);

	const addTask = (task: TaskType) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};

	const removeTask = (taskId: string) => {
		setTasks((prevTasks) =>
			prevTasks.filter((task) => task.taskId !== taskId)
		);
	};

	const updateTask = (taskId: string, updatedTask: TaskType) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.taskId === taskId ? { ...task, ...updatedTask } : task
			)
		);
	};

	const values: TaskContextType = { tasks, addTask, removeTask, updateTask };

	return (
		<TaskContext.Provider value={values}>{children}</TaskContext.Provider>
	);
};

// Create hook to use TaskContext
const useTask = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error("useTask must be used within a TaskProvider");
	}
	return context;
};

export { TaskProvider, useTask };
