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
import { Platform, Text, View } from "react-native";
import Global from "utils/constants/Global";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";
import FieldSmall from "../../../components/common/FieldSmall";
import { InputSmall } from "components/input";
import { categoryMocks } from "mock/categoryMocks";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const sheetRef = useRef<BottomSheetMethods>(null);
	const [choosedCategory, setChoosedCategory] = useState<string>(
		categoryMocks[1].cid
	);
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
							<CreateTaskIcon
								onPress={() => sheetRef.current?.open()}
							/>
						),
					}}
				/>
				<Tab.Screen name="AnalyticStack" component={AnalyticStack} />
				<Tab.Screen name="MenuStack" component={MenuStack} />
			</Tab.Navigator>

			<BottomSheet
				ref={sheetRef}
				height="90%"
				style={{ backgroundColor: "white" }}
			>
				<View style={{ paddingHorizontal: Global.padding, gap: 10 }}>
					<FieldSmall label="タイトル">
						<InputSmall />
					</FieldSmall>
					<FieldSmall label="説明">
						<InputSmall />
					</FieldSmall>
					<FieldSmall label="カテゴリ" style={{ gap: 12 }}>
						<View style={{ flexDirection: "row", gap: 10 }}>
							{categoryMocks.length > 0 &&
								categoryMocks.map((c) => (
									<View
										key={c.cid}
										style={{
											backgroundColor:
												choosedCategory === c.cid
													? colors.primary
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
													choosedCategory === c.cid
														? "white"
														: "black",
											}}
										>
											{c.name}
										</Text>
									</View>
								))}
						</View>
					</FieldSmall>
				</View>
			</BottomSheet>
		</>
	);
};

export default BottomTab;
