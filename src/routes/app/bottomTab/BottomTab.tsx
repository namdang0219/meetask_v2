import React from "react";
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
	HomeIcon,
	MenuIcon,
} from "components/icons/bottomTab";
import Global from "utils/constants/Global";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => {
					function setColor() {
						if (focused) {
							return Global.colors.light.primary;
						}
						return Global.colors.light.gray;
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
			})}
		>
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen name="CalendarStack" component={CalendarStack} />
			<Tab.Screen name="CreateStack" component={CreateStack} />
			<Tab.Screen name="AnalyticStack" component={AnalyticStack} />
			<Tab.Screen name="MenuStack" component={MenuStack} />
		</Tab.Navigator>
	);
};

export default BottomTab;
