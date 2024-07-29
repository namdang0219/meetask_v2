import { categoryMocks } from "mocks";
import { createContext, useContext, useState } from "react";
import { ViewProps } from "react-native";
import { CategoryContextType, CategoryType } from "utils/types";

const CategoryContext = createContext<CategoryContextType>({});

const CategoryProvider = ({ children }: ViewProps) => {
	const [categories, setCategories] = useState<CategoryType[]>(categoryMocks);

	const addCategory = (category: CategoryType) => {
		setCategories((prevCategories) => [...prevCategories, category]);
	};

	const removeCategory = (categoryId: string) => {
		setCategories((prevCategories) =>
			prevCategories.filter(
				(category) => category.categoryId !== categoryId
			)
		);
	};

	const updateCategory = (
		categoryId: string,
		updatedCategory: CategoryType
	) => {
		setCategories((prevCategories) =>
			prevCategories.map((category) =>
				category.categoryId === categoryId
					? { ...category, ...updatedCategory }
					: category
			)
		);
	};

	const values: CategoryContextType = {
		categories,
		addCategory,
		removeCategory,
		updateCategory,
	};

	return (
		<CategoryContext.Provider value={values}>
			{children}
		</CategoryContext.Provider>
	);
};

// Create hook to use CategoryContext
const useCategory = () => {
	const context = useContext(CategoryContext);
	if (!context) {
		throw new Error("useTask must be used within a TaskProvider");
	}
	return context;
};

export { CategoryProvider, useCategory };
