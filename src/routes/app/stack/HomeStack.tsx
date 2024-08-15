import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "screens/app/home";
import HomeDrawer from "../drawer/HomeDrawer";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen
				name="HomeDrawer"
				component={HomeDrawer}
			></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeStack;
