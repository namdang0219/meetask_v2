export type TaskType = {
	// Both checklist and timebound type
	tid: string;
	taskType?: "CHECKLIST" | "TIMEBOUND";
	title: string;
	category: string;
	status: "UNCOMPLETE" | "PROCESSING" | "COMPLETE";
	createdAt: string;
	updatedAt?: string;
	completedAt?: string;

	// if task checklist type
	date?: string;
	timeRange?: string;

	// if task Timebound type
	description?: string;
	priority?: "LOW" | "NORMAL" | "HIGH";
	startDate?: string;
	startTime?: string;
	endDate?: string;
	endTime?: string;
	tags?: string[];
	scope?: "PERSONAL" | "GROUP";

	// if task scope is GROUP
	gid?: string;
	assignedTo?: string;
	member?: string[];
	comments?: {
		uid: string;
		comment: string;
		createdAt: string;
		updatedAt?: string;
	}[];
};
