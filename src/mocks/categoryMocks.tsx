import { CategoryType } from "utils/types";

export const categoryMocks: CategoryType[] = [
	{
		categoryId: "1",
		name: "Shopping",
		color: "#fbbf24", // amber 400
	},
	{
		categoryId: "2",
		name: "Study",
		color: "#8b5cf6", // violet 500
	},
	{
		categoryId: "3",
		name: "School",
		color: "#22c55e", // green 500
	},
	{
		categoryId: "4",
		name: "Bussiness",
		color: "#ec4899", // pink 500
	},
] as const;
