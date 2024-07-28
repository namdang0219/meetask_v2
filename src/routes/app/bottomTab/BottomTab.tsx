import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AnalyticIcon,
	CalendarIcon,
	HomeIcon,
	MenuIcon,
	NewTaskIcon,
} from "components/icons/tabIcons";
import { primaryColor } from "utils/constants/ThemeColors";
import { useTheme } from "@react-navigation/native";
import CreateTask from "screens/app/stacks/CreateTask";
import { Text } from "react-native";
import AnalyticStack from "../stacks/AnalyticStack";
import CalendarStack from "../stacks/CalendarStack";
import HomeStack from "../stacks/HomeStack";
import MenuStack from "../stacks/MenuStack";
import CustomBottomSheetModal from "modules/app/sheets/CustomBottomSheetModal";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const { dismiss } = useBottomSheetModal();

	const handlePresentModalPress = () => bottomSheetRef.current?.present();

	return (
		<>
			<Tab.Navigator
				screenOptions={({ route }) => {
					return {
						tabBarStyle: { paddingHorizontal: 15, height: 86 },
						// tabBarShowLabel: true,
						tabBarLabelStyle: { fontSize: 10 },
						headerShown: false,
						tabBarActiveTintColor: primaryColor,
						tabBarLabel: ({ focused }) => {
							function iconColor(): string {
								if (focused) {
									return colors.primary;
								} else {
									return colors.bottomIconDefault;
								}
							}
							return (
								<>
									{
										<>
											{route.name === "HomeStack" ? (
												<Text
													style={{
														color: iconColor(),
														fontSize: 10,
													}}
												>
													Home
												</Text>
											) : route.name ===
											  "CalendarStack" ? (
												<Text
													style={{
														color: iconColor(),
														fontSize: 10,
													}}
												>
													Calendar
												</Text>
											) : route.name === "CreateTask" ? (
												<NewTaskIcon
													onPress={
														handlePresentModalPress
													}
												/>
											) : route.name ===
											  "AnalyticStack" ? (
												<Text
													style={{
														color: iconColor(),
														fontSize: 10,
													}}
												>
													Analytic
												</Text>
											) : route.name === "MenuStack" ? (
												<Text
													style={{
														color: iconColor(),
														fontSize: 10,
													}}
												>
													Menu
												</Text>
											) : (
												<></>
											)}
										</>
									}
								</>
							);
						},
						tabBarIconStyle: {
							marginBottom: -4,
							transform: [{ scale: 0.95 }],
						},
						tabBarIcon: ({ focused }) => {
							function iconColor(): string {
								if (focused) {
									return colors.primary;
								} else {
									return colors.bottomIconDefault;
								}
							}
							return (
								<>
									{
										<>
											{route.name === "HomeStack" ? (
												<HomeIcon color={iconColor()} />
											) : route.name ===
											  "CalendarStack" ? (
												<CalendarIcon
													color={iconColor()}
												/>
											) : route.name === "CreateTask" ? (
												<NewTaskIcon
												onPress={
												  handlePresentModalPress
												}
												/>
											) : route.name ===
											  "AnalyticStack" ? (
												<AnalyticIcon
													color={iconColor()}
												/>
											) : route.name === "MenuStack" ? (
												<MenuIcon color={iconColor()} />
											) : (
												<></>
											)}
										</>
									}
								</>
							);
						},
					};
				}}
			>
				<Tab.Screen name="HomeStack" component={HomeStack}></Tab.Screen>
				<Tab.Screen
					name="CalendarStack"
					component={CalendarStack}
				></Tab.Screen>
				<Tab.Screen
					name="CreateTask"
					options={{ tabBarLabel: () => null }}
					component={CreateTask}
				></Tab.Screen>
				<Tab.Screen
					name="AnalyticStack"
					component={AnalyticStack}
				></Tab.Screen>
				<Tab.Screen name="MenuStack" component={MenuStack}></Tab.Screen>
			</Tab.Navigator>
			<CustomBottomSheetModal ref={bottomSheetRef} />
		</>
	);
};

export default BottomTab;
