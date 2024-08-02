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
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import AnalyticStack from "../stacks/AnalyticStack";
import CalendarStack from "../stacks/CalendarStack";
import HomeStack from "../stacks/HomeStack";
import MenuStack from "../stacks/MenuStack";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CustomBottomSheetModal } from "components/customs";
import { TaskAddSheet } from "modules/app/sheets";
import { isIOS } from "utils/functions/isIOS";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const bottomSheetRef = useRef<BottomSheetModal>(null);
	const {width} = useWindowDimensions()

	const handlePresentModalPress = () => bottomSheetRef.current?.present();

	const handleFullOpen = () => bottomSheetRef.current?.snapToIndex(1);

	return (
		<>
			<StatusBar style="dark" />
			<Tab.Navigator
				screenOptions={({ route }) => {
					return {
						tabBarStyle: {
							paddingHorizontal: 15,
							height: isIOS() ? (width > 600 ? 75: 90) : 75,
						},
						tabBarLabelStyle: { fontSize: 10 },
						tabBarShowLabel: isIOS() ? (width > 600 ? false: true) : false,
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

							const styles = StyleSheet.create({
								labelStyle: {
									color: iconColor(),
									marginTop: -8,
									fontSize: 10,
								},
							});

							return (
								<>
									{
										<>
											{route.name === "HomeStack" ? (
												<Text style={styles.labelStyle}>
													ホーム
												</Text>
											) : route.name ===
											  "CalendarStack" ? (
												<Text style={styles.labelStyle}>
													カレンダー
												</Text>
											) : route.name === "CreateTask" ? (
												<View
													style={{
														backgroundColor: "cyan",
														flex: 1,
													}}
												>
													<NewTaskIcon
														style={{
															backgroundColor:
																"yellow",
														}}
														onPress={
															handlePresentModalPress
														}
													/>
												</View>
											) : route.name ===
											  "AnalyticStack" ? (
												<Text style={styles.labelStyle}>
													分析
												</Text>
											) : route.name === "MenuStack" ? (
												<Text style={styles.labelStyle}>
													メニュー
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
			<CustomBottomSheetModal ref={bottomSheetRef}>
				<TaskAddSheet handleFullOpen={handleFullOpen}></TaskAddSheet>
			</CustomBottomSheetModal>
		</>
	);
};

export default BottomTab;
