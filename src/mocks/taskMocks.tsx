import { TaskType } from "utils/types";

export const taskMocks: TaskType[] = [
	{
		taskId: "1",
		title: "Do math homework",
		content: "Do math homework from unit 1 to unit 2",
		category: "Study",
		type: "TASK",
		status: "DONE",
		start: {
			day: "2024-07-24",
			time: "",
		},
		end: {
			day: "2024-07-29",
			time: "",
		},
	},
	{
		taskId: "2",
		title: "Grocery shopping",
		content: "Buy groceries for the week",
		category: "Shopping",
		type: "TASK",
		status: "UNDONE",
		start: {
			day: "2024-07-30",
			time: "09:00",
		},
		end: {
			day: "2024-07-30",
			time: "11:00",
		},
	},
	{
		taskId: "3",
		title: "Team meeting",
		content: "Discuss project milestones",
		category: "Business",
		type: "EVENT",
		status: "UNDONE",
		start: {
			day: "2024-08-01",
			time: "10:00",
		},
		end: {
			day: "2024-08-01",
			time: "11:00",
		},
	},
	{
		taskId: "4",
		title: "Prepare presentation",
		content: "Create slides for the school project presentation",
		category: "School",
		type: "TASK",
		status: "UNDONE",
		start: {
			day: "2024-08-02",
			time: "14:00",
		},
		end: {
			day: "2024-08-02",
			time: "16:00",
		},
	},
	{
		taskId: "5",
		title: "Yoga class",
		content: "Attend yoga class at the community center",
		category: "School",
		type: "EVENT",
		status: "DONE",
		start: {
			day: "2024-07-28",
			time: "08:00",
		},
		end: {
			day: "2024-07-28",
			time: "09:00",
		},
	},
	{
		taskId: "6",
		title: "Complete budget report",
		content: "Finalize the budget report for Q3",
		category: "Business",
		type: "TASK",
		status: "DONE",
		start: {
			day: "2024-07-27",
			time: "13:00",
		},
		end: {
			day: "2024-07-27",
			time: "17:00",
		},
	},
];
