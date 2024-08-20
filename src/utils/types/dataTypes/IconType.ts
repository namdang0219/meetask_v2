import { ReactNode } from "react";

export type IconType = {
	iid: string;
	type: "WORK" | 'STUDY' | "SHOPPING" | "HEALTH";
	icon: ReactNode;
};
