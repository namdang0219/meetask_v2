import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderText from "components/headers/HeaderText";
import Analytic from "screens/app/stacks/analyticStacks/Analytic";

const Stack = createNativeStackNavigator();

const AnalyticStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				header: () => (
					<HeaderText>Analytic</HeaderText>
				),
			}}
		>
			<Stack.Screen name="Analytic" component={Analytic} />
		</Stack.Navigator>
	);
};

export default AnalyticStack;
