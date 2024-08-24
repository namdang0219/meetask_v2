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
import { Text, View } from "react-native";
import { ActionSheet, Dialog, PanningProvider } from "react-native-ui-lib";
import Global from "utils/constants/Global";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const [isVisible, setIsVisible] = useState<boolean>(true);
	const sheetRef = useRef<BottomSheetMethods>(null);

	return (
		<>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					headerShown: false,
					tabBarStyle: { height: 65 },
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

			<BottomSheet ref={sheetRef}>
				<Text>
					The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app
					craves 🚀
				</Text>
			</BottomSheet>
		</>
	);
};

export default BottomTab;
