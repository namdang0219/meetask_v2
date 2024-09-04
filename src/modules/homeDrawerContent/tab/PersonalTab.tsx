import {
	LayoutChangeEvent,
	ScrollView,
	Text,
	View,
	Pressable,
	useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import HomeCategory from "./personal/HomeCategory";
import CustomListCategory from "./personal/CustomListCategory";
import {
	DrawerActions,
	useNavigation,
	useTheme,
} from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/custom";
import Global from "utils/constants/Global";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { FieldSmall } from "components/common";
import { InputSmall } from "components/input";
import { Dialog, PanningProvider } from "react-native-ui-lib";
import Button from "components/button/Button";
import { useState } from "react";
import categoryColors from "data/categoryColors";
import { categoryIcons } from "data/categoryIcons";
import { setCategoryIcon } from "utils/func";
import { addCategory } from "store/category/categorySlice";
import { CategoryType } from "utils/types/dataTypes";

const PersonalTab = () => {
	const { drawerCategory } = useSelector((state: RootState) => state.global);
	const { colors } = useTheme();
	const { dispatch: navigationDispatch } = useNavigation();
	const dispatch = useDispatch();
	const [categoryModalVisible, setCategoryModalVisible] =
		useState<boolean>(false);
	const [currentColor, setCurrentColor] = useState<string>(categoryColors[0]);
	const [currentIcon, setCurrentIcon] = useState<string>(
		categoryIcons[0].iid
	);
	const [containerInsetWidth, setContainerInsetWidth] = useState<number>(200);

	const colorItemGap = 10;
	const iconItemGap = 10;

	// handle category item color
	const handleCategoryItemColor = (categoryName: string): string => {
		return drawerCategory === categoryName ? "white" : colors.icon;
	};

	const handleOpenAddCategoryModal = () => {
		navigationDispatch(DrawerActions.closeDrawer());
		setCategoryModalVisible(true);
	};

	const handleAddCategory = () => {
		const timeStampId = Math.floor(Date.now() / 1000);
		const newCategory: CategoryType = {
			cid: String(timeStampId),
			name: `Category ${timeStampId} ${timeStampId} ${timeStampId}`,
			color: currentColor,
			icon: currentIcon,
		};
		setCategoryModalVisible(false);
		dispatch(addCategory(newCategory));
		
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
				onPress={handleOpenAddCategoryModal}
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
			<Dialog
				visible={categoryModalVisible}
				onDismiss={() => setCategoryModalVisible(false)}
				ignoreBackgroundPress
			>
				{/* container  */}
				<View
					style={{
						backgroundColor: colors.background,
						borderRadius: 14,
						padding: Global.padding,
						gap: Global.padding,
						position: "relative",
					}}
				>
					<View>
						{/* header  */}
						<Text
							style={{
								color: colors.text,
								fontWeight: "500",
								fontSize: 20,
								textAlign: "center",
							}}
						>
							新規タスク
						</Text>

						{/* x icon  */}
						<CustomTouchableOpacity
							onPress={() => setCategoryModalVisible(false)}
							style={{ position: "absolute", right: 0, top: 0 }}
						>
							<Feather name="x" color={colors.icon} size={20} />
						</CustomTouchableOpacity>

						{/* content  */}
						<View style={{ paddingTop: 14, gap: 20 }}>
							{/* category title  */}
							<FieldSmall label="カテゴリー名">
								<InputSmall></InputSmall>
							</FieldSmall>

							{/* category color  */}
							<FieldSmall label="カラー">
								<View
									style={{
										flexDirection: "row",
										gap: colorItemGap,
										flexWrap: "wrap",
									}}
									onLayout={(event: LayoutChangeEvent) =>
										setContainerInsetWidth(
											event.nativeEvent.layout.width
										)
									}
								>
									{categoryColors.length > 0 &&
										categoryColors.map((color) => {
											const itemPerLine = 7;
											return (
												<CustomTouchableOpacity
													key={color}
													onPress={() =>
														setCurrentColor(color)
													}
													style={{
														height:
															(containerInsetWidth -
																(itemPerLine -
																	1) *
																	colorItemGap) /
															itemPerLine,
														width:
															(containerInsetWidth -
																(itemPerLine -
																	1) *
																	colorItemGap) /
															itemPerLine,
														backgroundColor: color,
														borderRadius: 1000,
														alignItems: "center",
														justifyContent:
															"center",
													}}
												>
													{currentColor === color && (
														<Ionicons
															name="checkmark-sharp"
															color="white"
															size={26}
															style={{
																opacity: 0.85,
															}}
														/>
													)}
												</CustomTouchableOpacity>
											);
										})}
								</View>
							</FieldSmall>

							{/* category icon  */}
							<FieldSmall label="アイコン">
								<View
									style={{
										flexDirection: "row",
										flexWrap: "wrap",
										gap: iconItemGap,
									}}
								>
									{categoryIcons.length > 0 &&
										categoryIcons.map((icon) => {
											const itemPerLine = 4;
											return (
												<Pressable
													key={icon.iid}
													onPress={() =>
														setCurrentIcon(icon.iid)
													}
													style={{
														width:
															(containerInsetWidth -
																iconItemGap *
																	(itemPerLine -
																		1)) /
															itemPerLine,
														height:
															(containerInsetWidth -
																iconItemGap *
																	(itemPerLine -
																		1)) /
															itemPerLine,
														alignItems: "center",
														justifyContent:
															"center",
														backgroundColor:
															currentIcon ==
															icon.iid
																? currentColor
																: colors.input,
														borderRadius: 10,
													}}
												>
													{setCategoryIcon(
														icon.icon,
														36,
														currentIcon == icon.iid
															? "white"
															: colors.text
													)}
												</Pressable>
											);
										})}
								</View>
							</FieldSmall>
						</View>
					</View>
					<Button
						onPress={handleAddCategory}
						style={{ height: 50, marginTop: 20 }}
					>
						タスクを追加
					</Button>
				</View>
			</Dialog>
		</ScrollView>
	);
};

export default PersonalTab;
