import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AnalyticStack,
	CalendarStack,
	CreateStack,
	HomeStack,
	MenuStack,
} from "../stack";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={() => ({
				headerShown: false,
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
