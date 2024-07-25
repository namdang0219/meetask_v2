import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "routes/app/BottomTab";
import AuthStack from "routes/auth/AuthStack";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="AuthStack" component={AuthStack} />
			<Stack.Screen name="BottomTab" component={BottomTab} />
		</Stack.Navigator>
	);
};

export default RootNavigation;
