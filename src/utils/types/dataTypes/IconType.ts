import { ComponentType } from "react";

export type IconType = {
	iid: string;
	type: "WORK" | "STUDY" | "SHOPPING" | "HEALTH";
	icon: ComponentType;
};

export type IconComponentProps = {
	size?: number;
	color?: string;
};
