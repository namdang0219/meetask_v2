import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import Global from "utils/constants/Global";
import HomeCategory from "./personal/HomeCategory";
import CustomListCategory from "./personal/CustomListCategory";
import { useTheme } from "@react-navigation/native";

const PersonalTab = () => {
	const { drawerCategory } = useSelector((state: RootState) => state.global);
	const { colors } = useTheme();

	// handle category item color
	const handleCategoryItemColor = (categoryName: string): string => {
		return drawerCategory === categoryName ? "white" : colors.icon;
	};

	return (
		<ScrollView>
			<HomeCategory handleCategoryItemColor={handleCategoryItemColor} />
			<CustomListCategory
				handleCategoryItemColor={handleCategoryItemColor}
			/>
		</ScrollView>
	);
};

export default PersonalTab;
