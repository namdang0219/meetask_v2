export type CategoryType = {
	categoryId: string;
	name: string;
	color: string;
};

export type CategoryContextType = {
	categories?: CategoryType[];
	addCategory?: (category: CategoryType) => void;
	removeCategory?: (categoryId: string) => void;
	updateCategory?: (categoryId: string, updatedCategory: CategoryType) => void;
};
