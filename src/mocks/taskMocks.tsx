import { TaskType } from "utils/types";

export const taskMocks: TaskType[] = [
	{
		taskId: "1",
		title: "Do math homework",
		desc: "Do math homework from unit 1 to unit 2",
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
		hour: '12:20',
		location: 'Hai Duong'
	},
	{
		taskId: "2",
		title: "Grocery shopping",
		desc: "Buy groceries for the week",
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
		hour: '12:20',
		location: 'Ha Noi'
	},
	{
		taskId: "3",
		title: "Team meeting",
		desc: "Discuss project milestones",
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
		hour: '12:20',
		location: 'Ho Chi Minh'
	},
	{
		taskId: "4",
		title: "Prepare presentation",
		desc: "Create slides for the school project presentation",
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
		hour: '12:20',
		location: 'Da Nang'
	},
	{
		taskId: "5",
		title: "Yoga class",
		desc: "Attend yoga class at the community center",
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
		hour: '12:20',
		location: 'Can Tho'
	},
	{
		taskId: "6",
		title: "Complete budget report",
		desc: "Finalize the budget report for Q3",
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
		hour: '12:20',
		location: 'Dien Bien'
	},
];
