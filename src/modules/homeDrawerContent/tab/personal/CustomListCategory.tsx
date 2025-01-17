import { View, Text } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "components/custom";
import Global from "utils/constants/Global";
import { setCategoryIcon } from "utils/func";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/configureStore";
import { setDrawerCategory } from "store/global/globalSlice";
import { CategoryType } from "utils/types/dataTypes";
import { categoryIcons } from "data/categoryIcons";

const CustomListCategory = ({
	handleCategoryItemColor,
}: {
	handleCategoryItemColor: (categoryName: string) => string;
}) => {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();
	const { drawerCategory } = useSelector((state: RootState) => state.global);
	const categories = useSelector((state: RootState) => state.category);
	const dispatch = useDispatch();

	// handle change category
	const handleChangeCategory = (categoryName: string) => {
		navigate(categoryName);
		dispatch(setDrawerCategory(categoryName));
	};

	// find category icon from data
	const findIcon = (category: CategoryType) => {
		return categoryIcons.find((i) => i.iid === category.icon)?.icon;
	};

	const handleCategoryActionSheet = (cid: string) => {
		console.log(cid)
	}

	return (
		<>
			{categories &&
				categories.map((category) => (
					<CustomTouchableOpacity
						key={category.cid}
						onPress={() => handleChangeCategory(category.name)}
						onLongPress={() => handleCategoryActionSheet(category.cid)}
						style={{
							backgroundColor:
								drawerCategory === category.name
									? colors.primary
									: "transparent",
							paddingHorizontal: Global.padding,
							height: 50,
							borderRadius: 10,
							flexDirection: "row",
							gap: 12,
							alignItems: "center",
						}}
					>
						<View>
							{setCategoryIcon(
								findIcon(category),
								20,
								handleCategoryItemColor(category.name)
							)}
						</View>
						<Text
							style={{
								fontSize: 16,
								fontWeight: "500",
								color: handleCategoryItemColor(category.name),
								flex: 1,
							}}
							numberOfLines={1}
						>
							{category.name}
						</Text>
					</CustomTouchableOpacity>
				))}
		</>
	);
};

export default CustomListCategory;
