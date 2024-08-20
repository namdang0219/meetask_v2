import { TaskType } from "utils/types/dataTypes";

export const taskMocks: TaskType[] = [
	{
		tid: "1",
		title: "Complete project report",
		description:
			"Finish the quarterly project report for the client meeting.",
		category: "Work",
		status: "PROCESSING",
		dueDate: new Date("2024-08-25"),
		priority: "HIGH",
		createdAt: new Date("2024-08-01"),
		updatedAt: new Date("2024-08-20"),
		tags: ["report", "client", "Q3"],
		scope: "PERSONAL",
	},
	{
		tid: "2",
		title: "Study React hooks",
		description: "Review React hooks and practice with examples.",
		category: "Study",
		status: "UNCOMPLETE",
		dueDate: new Date("2024-08-22"),
		priority: "NORMAL",
		createdAt: new Date("2024-08-10"),
		updatedAt: new Date("2024-08-19"),
		tags: ["React", "hooks", "practice"],
		scope: "PERSONAL",
	},
	{
		tid: "3",
		title: "Grocery shopping",
		description: "Buy groceries for the week.",
		category: "Shopping",
		status: "COMPLETE",
		dueDate: new Date("2024-08-15"),
		priority: "LOW",
		createdAt: new Date("2024-08-10"),
		updatedAt: new Date("2024-08-15"),
		completedAt: new Date("2024-08-15"),
		tags: ["groceries", "shopping", "week"],
		scope: "PERSONAL",
	},
	{
		tid: "4",
		title: "Team health check-up",
		description: "Schedule and organize a health check-up for the team.",
		category: "Health",
		status: "PROCESSING",
		dueDate: new Date("2024-08-30"),
		priority: "HIGH",
		createdAt: new Date("2024-08-05"),
		updatedAt: new Date("2024-08-18"),
		tags: ["health", "team", "check-up"],
		scope: "GROUP",
		assignedTo: "John Doe",
		member: ["Alice", "Bob", "Charlie"],
		comments: ["Need to finalize the date", "Confirm with clinic"],
	},
	{
		tid: "5",
		title: "Prepare presentation slides",
		description: "Create slides for the upcoming project presentation.",
		category: "Work",
		status: "UNCOMPLETE",
		dueDate: new Date("2024-08-27"),
		priority: "HIGH",
		createdAt: new Date("2024-08-15"),
		updatedAt: new Date("2024-08-19"),
		tags: ["presentation", "slides", "project"],
		scope: "PERSONAL",
	},
	{
		tid: "6",
		title: "Monthly budget planning",
		description: "Plan and allocate budget for the next month.",
		category: "Finance",
		status: "COMPLETE",
		dueDate: new Date("2024-08-20"),
		priority: "NORMAL",
		createdAt: new Date("2024-08-01"),
		updatedAt: new Date("2024-08-19"),
		completedAt: new Date("2024-08-19"),
		tags: ["budget", "finance", "planning"],
		scope: "PERSONAL",
	},
	{
		tid: "7",
		title: "Read new health guidelines",
		description:
			"Review the latest health guidelines from the health department.",
		category: "Health",
		status: "PROCESSING",
		dueDate: new Date("2024-08-25"),
		priority: "NORMAL",
		createdAt: new Date("2024-08-15"),
		updatedAt: new Date("2024-08-19"),
		tags: ["health", "guidelines", "review"],
		scope: "PERSONAL",
	},
	{
		tid: "8",
		title: "Organize team meeting",
		description:
			"Set up and organize a team meeting to discuss project progress.",
		category: "Work",
		status: "UNCOMPLETE",
		dueDate: new Date("2024-08-23"),
		priority: "HIGH",
		createdAt: new Date("2024-08-10"),
		updatedAt: new Date("2024-08-19"),
		tags: ["meeting", "team", "progress"],
		scope: "GROUP",
		assignedTo: "Alice Smith",
		member: ["John Doe", "Bob", "Charlie"],
		comments: ["Prepare agenda", "Confirm availability"],
	},
	{
		tid: "9",
		title: "Buy textbooks for next semester",
		description: "Purchase required textbooks for the upcoming semester.",
		category: "Study",
		status: "PROCESSING",
		dueDate: new Date("2024-08-29"),
		priority: "NORMAL",
		createdAt: new Date("2024-08-12"),
		updatedAt: new Date("2024-08-19"),
		tags: ["textbooks", "purchase", "semester"],
		scope: "PERSONAL",
	},
	{
		tid: "10",
		title: "Weekly grocery shopping",
		description: "Buy groceries for the week.",
		category: "Shopping",
		status: "UNCOMPLETE",
		dueDate: new Date("2024-08-21"),
		priority: "LOW",
		createdAt: new Date("2024-08-14"),
		updatedAt: new Date("2024-08-19"),
		tags: ["groceries", "shopping", "weekly"],
		scope: "PERSONAL",
		isRecurring: true,
	},
];
