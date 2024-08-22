import { useNavigation } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/custom";
import { DrawerHomeIcon } from "components/icons/category";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/configureStore";
import { setDrawerCategory } from "store/global/globalSlice";
import Global from "utils/constants/Global";
import { setCategoryIcon } from "utils/func";

const HomeCategory = ({
	handleCategoryItemColor,
}: {
	handleCategoryItemColor: (categoryName: string) => string;
}) => {
	const { navigate } = useNavigation<any>();
	const { drawerCategory } = useSelector((state: RootState) => state.global);
	const dispatch = useDispatch();

	const handleChangeToHome = () => {
		navigate("HomeScreen");
		dispatch(setDrawerCategory("Home"));
	};

	const styles = StyleSheet.create({
		container: {
			backgroundColor:
				drawerCategory === "Home"
					? Global.colors.light.primary
					: "white",
			paddingHorizontal: Global.padding,
			height: 50,
			borderRadius: 10,
			flexDirection: "row",
			gap: 12,
			alignItems: "center",
		},
		label: {
			fontSize: 16,
			fontWeight: "500",
			color: handleCategoryItemColor("Home"),
		},
	});

	return (
		<CustomTouchableOpacity
			onPress={handleChangeToHome}
			style={styles.container}
		>
			{setCategoryIcon(
				DrawerHomeIcon,
				20,
				handleCategoryItemColor("Home")
			)}
			<Text style={styles.label}>Home</Text>
		</CustomTouchableOpacity>
	);
};

export default HomeCategory;
