import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./bottomTab/BottomTab";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="BottomTab" component={BottomTab} />
		</Stack.Navigator>
	);
};

export default AppStack;
