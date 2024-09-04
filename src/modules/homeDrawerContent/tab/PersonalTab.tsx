import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import HomeCategory from "./personal/HomeCategory";
import CustomListCategory from "./personal/CustomListCategory";
import { useTheme } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/custom";
import Global from "utils/constants/Global";
import { AntDesign } from '@expo/vector-icons'

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

			{/* line  */}
			<View
				style={{
					height: 1,
					backgroundColor: colors.icon,
					opacity: 0.4,
					marginTop: 8,
				}}
			/>

			{/* add category item  */}
			<CustomTouchableOpacity
				style={{
					paddingHorizontal: Global.padding,
					height: 50,
					borderRadius: 10,
					flexDirection: "row",
					gap: 12,
					alignItems: "center",
				}}
			>
				<AntDesign name="plus" color={colors.icon} size={20} />
				<Text
					style={{
						fontSize: 16,
						fontWeight: "500",
						color: colors.icon,
					}}
				>
					カテゴリを追加
				</Text>
			</CustomTouchableOpacity>
		</ScrollView>
	);
};

export default PersonalTab;
