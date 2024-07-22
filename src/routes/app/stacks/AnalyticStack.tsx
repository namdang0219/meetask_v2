import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Analytic from "screens/app/Analytic";

const Stack = createNativeStackNavigator();

const AnalyticStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Analytic" component={Analytic} />
		</Stack.Navigator>
	);
};

export default AnalyticStack;
