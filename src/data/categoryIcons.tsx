import { IconType } from "utils/types/dataTypes";
import {
	HealthIcon_01,
	HealthIcon_02,
	ShoppingIcon_01,
	ShoppingIcon_02,
	StudyIcon_01,
	StudyIcon_02,
	WorkIcon_01,
	WorkIcon_02,
} from "components/icons/category";

export const categoryIcons: IconType[] = [
	// work icons
	{
		iid: "1",
		type: "WORK",
		icon: <WorkIcon_01 />,
	},
	{
		iid: "2",
		type: "WORK",
		icon: <WorkIcon_02 />,
	},
	// study icons
	{
		iid: "3",
		type: "STUDY",
		icon: <StudyIcon_01 />,
	},
	{
		iid: "4",
		type: "STUDY",
		icon: <StudyIcon_02 />,
	},
	// shopping icons
	{
		iid: "5",
		type: "SHOPPING",
		icon: <ShoppingIcon_01 />,
	},
	{
		iid: "6",
		type: "SHOPPING",
		icon: <ShoppingIcon_02 />,
	},
	{
		iid: "7",
		type: "HEALTH",
		icon: <HealthIcon_01 />,
	},
	{
		iid: "8",
		type: "HEALTH",
		icon: <HealthIcon_02 />,
	},
];
