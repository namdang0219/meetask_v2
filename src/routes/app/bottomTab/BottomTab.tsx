import React, { useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AnalyticStack,
	CalendarStack,
	CreateStack,
	HomeStack,
	MenuStack,
} from "../stack";
import {
	AnalyticIcon,
	CalendarIcon,
	CreateTaskIcon,
	HomeIcon,
	MenuIcon,
} from "components/icons/bottomTab";
import { useTheme } from "@react-navigation/native";
import { Platform, Pressable, Text, View } from "react-native";
import { CustomBottomSheet, CustomTouchableOpacity } from "components/custom";
import { BottomSheetRef } from "components/custom/CustomBottomSheet";
import TaskForm from "modules/form/TaskForm";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { DateTimePicker, Dialog, PanningProvider } from "react-native-ui-lib";
import { Button } from "components/button";
import Global from "utils/constants/Global";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FieldSmall } from "components/common";
import { InputSmall } from "components/input";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const [taskModalVisible, setTaskModalVisible] = useState<boolean>(false);
	const categories = useSelector((state: RootState) => state.category)
	const bottomSheetRef = useRef<BottomSheetRef>(null);
	const [choosedCategory, setChoosedCategory] = useState<string>(
		categories[0].cid
	);

	const { showActionSheetWithOptions } = useActionSheet();

	const openOptions = () => {
		const options = ["タスク", "イベント", "キャンセル"];
		const title = "タスクの週類を選択してください";
		const cancelButtonIndex = options.length - 1;
		const cancelButtonTintColor = "red";

		showActionSheetWithOptions(
			{
				options,
				title,
				cancelButtonIndex,
				cancelButtonTintColor,
			},
			(selectedIndex: number | undefined) => {
				switch (selectedIndex) {
					case 0:
						setTaskModalVisible(true);
						break;
					case 1:
						bottomSheetRef.current?.snapToIndex(1);
						break;
				}
			}
		);
	};

	return (
		<>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarStyle: Platform.OS === "android" && {
						height: 65,
					},
					tabBarItemStyle: {
						height: 54,
						marginTop: 4,
					},
					tabBarIcon: ({ focused }) => {
						function setColor() {
							if (focused) {
								return colors.primary;
							}
							return colors.icon;
						}
						return (
							<>
								{(route.name === "HomeStack" && (
									<HomeIcon color={setColor()} />
								)) ||
									(route.name === "CalendarStack" && (
										<CalendarIcon color={setColor()} />
									)) ||
									(route.name === "AnalyticStack" && (
										<AnalyticIcon color={setColor()} />
									)) ||
									(route.name === "MenuStack" && (
										<MenuIcon color={setColor()} />
									))}
							</>
						);
					},
					tabBarLabel: ({ focused }) => (
						<Text
							style={{
								color: focused ? colors.primary : colors.icon,
								fontSize: 10,
							}}
						>
							{(route.name === "HomeStack" && "ホーム") ||
								(route.name === "CalendarStack" &&
									"カレンダー") ||
								(route.name === "AnalyticStack" && "分析") ||
								(route.name === "MenuStack" && "メニュー")}
						</Text>
					),
				})}
			>
				<Tab.Screen name="HomeStack" component={HomeStack} />
				<Tab.Screen name="CalendarStack" component={CalendarStack} />
				<Tab.Screen
					name="CreateStack"
					component={CreateStack}
					options={{
						tabBarButton: () => (
							<CreateTaskIcon onPress={openOptions} />
						),
					}}
				/>
				<Tab.Screen name="AnalyticStack" component={AnalyticStack} />
				<Tab.Screen name="MenuStack" component={MenuStack} />
			</Tab.Navigator>

			<CustomBottomSheet ref={bottomSheetRef}>
				<TaskForm />
			</CustomBottomSheet>

			<Dialog
				visible={taskModalVisible}
				onDismiss={() => setTaskModalVisible(false)}
				panDirection={PanningProvider.Directions.DOWN}
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
						<CustomTouchableOpacity
							onPress={() => setTaskModalVisible(false)}
							style={{ position: "absolute", right: 0, top: 0 }}
						>
							<Feather name="x" color={colors.icon} size={20} />
						</CustomTouchableOpacity>

						{/* content  */}
						<View style={{ paddingTop: 14, gap: 14 }}>
							<FieldSmall label="タイトル">
								<InputSmall></InputSmall>
							</FieldSmall>

							{/* category  */}
							<FieldSmall label="カテゴリ" style={{ gap: 14 }}>
								<View
									style={{
										flexDirection: "row",
										gap: 10,
										flexWrap: "wrap",
									}}
								>
									{categories.length > 0 &&
										categories.map((c) => (
											<Pressable
												key={c.cid}
												onPress={() =>
													setChoosedCategory(c.cid)
												}
												style={{
													backgroundColor:
														choosedCategory ===
														c.cid
															? c.color
															: colors.input,
													paddingHorizontal: 14,
													paddingVertical: 6,
													borderRadius: 6,
												}}
											>
												<Text
													style={{
														fontSize: 16,
														color:
															choosedCategory ===
															c.cid
																? "white"
																: "black",
													}}
												>
													{c.name}
												</Text>
											</Pressable>
										))}
								</View>
							</FieldSmall>

							{/* Time  */}
							<FieldSmall label="日時">
								<View
									style={{
										gap: 14,
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									{/* date  */}
									<View
										style={{
											flex: 1,
											height: 45, // same height with input small component
											paddingHorizontal: 12,
											borderColor: colors.icon,
											borderWidth: 0.5,
											borderRadius: 6,
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<DateTimePicker
											mode={"date"}
											placeholder={"Select time"}
											value={new Date()}
											style={{ fontSize: 18 }}
										/>
										<Ionicons
											name="calendar-outline"
											size={24}
											color={colors.icon}
										/>
									</View>

									{/* time  */}
									<View
										style={{
											flex: 1,
											height: 45, // same height with input small component
											paddingHorizontal: 12,
											borderColor: colors.icon,
											borderWidth: 0.5,
											borderRadius: 6,
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<DateTimePicker
											mode={"time"}
											placeholder={"Select time"}
											value={new Date()}
											style={{ fontSize: 18 }}
										/>
										<Feather
											name="clock"
											size={24}
											color={colors.icon}
										/>
									</View>
								</View>
							</FieldSmall>
						</View>
					</View>
					<Button style={{ height: 50 }}>タスクを追加</Button>
				</View>
			</Dialog>
		</>
	);
};

export default BottomTab;
