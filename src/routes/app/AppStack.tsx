import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./bottomTab/BottomTab";
import { QrScanScreen } from "screens/app/menu";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="BottomTab" component={BottomTab} />
			<Stack.Screen name="QrScanScreen" component={QrScanScreen} />
		</Stack.Navigator>
	);
};

export default AppStack;
