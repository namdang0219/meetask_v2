import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "../stacks";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen name="HomeStack" component={HomeStack} />
		</Tab.Navigator>
	);
};

export default BottomTab;
