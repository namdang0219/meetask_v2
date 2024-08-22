import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import Global from "utils/constants/Global";
import HomeCategory from "./personal/HomeCategory";
import CustomListCategory from "./personal/CustomListCategory";

const PersonalTab = () => {
	const { drawerCategory } = useSelector((state: RootState) => state.global);

	// handle category item color
	const handleCategoryItemColor = (categoryName: string): string => {
		return drawerCategory === categoryName
			? Global.colors.light.iconActiveTintColor
			: Global.colors.light.iconInActiveTintColor;
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
