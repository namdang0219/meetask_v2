export type TaskType = {
	tid: string;
	title: string;
	description?: string;
	category: string;
	status: "UNCOMPLETE" | "PROCESSING" | "COMPLETE";
	dueDate?: Date;
	priority: "LOW" | "NORMAL" | "HIGH";
	createdAt?: Date;
	updatedAt?: Date;
	completedAt?: Date;
	tags?: string[];
	isRecurring?: boolean;
	scope?: "PERSONAL" | "GROUP";

	taskType?: "CHECKLIST" | "TIMEBOUND";
	// For target is GROUP
	assignedTo?: string;
	member?: string[];
	comments?: string[];
};
