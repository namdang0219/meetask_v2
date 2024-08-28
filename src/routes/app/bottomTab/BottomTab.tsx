import React, { useRef } from "react";
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
import { Platform, Text } from "react-native";
import { CustomBottomSheet } from "components/custom";
import { BottomSheetRef } from "components/custom/CustomBottomSheet";
import { TaskForm } from "modules/form";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const bottomSheetRef = useRef<BottomSheetRef>(null);

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
								onPress={() =>
									bottomSheetRef.current?.snapToIndex(1)
								}
							/>
						),
					}}
				/>
				<Tab.Screen name="AnalyticStack" component={AnalyticStack} />
				<Tab.Screen name="MenuStack" component={MenuStack} />
			</Tab.Navigator>

			<CustomBottomSheet ref={bottomSheetRef}>
				<TaskForm />
			</CustomBottomSheet>
		</>
	);
};

export default BottomTab;
