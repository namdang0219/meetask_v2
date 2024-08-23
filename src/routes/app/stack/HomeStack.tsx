import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDrawer from "../drawer/HomeDrawer";
import { ProfileScreen } from "screens/app/menu";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={() => ({
				headerShown: false,
			})}
		>
			<Stack.Screen name="HomeDrawer" component={HomeDrawer} />
			<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
		</Stack.Navigator>
	);
};

export default HomeStack;
