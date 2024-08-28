import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnalyticScreen } from "screens/app/analytic";

const Stack = createNativeStackNavigator();

const AnalyticStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="AnalyticScreen" component={AnalyticScreen} />
		</Stack.Navigator>
	);
};

export default AnalyticStack;
