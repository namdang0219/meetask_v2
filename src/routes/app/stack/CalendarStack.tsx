import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalendarScreen } from "screens/app/calendar";

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="CalendarScreen" component={CalendarScreen} />
		</Stack.Navigator>
	);
};

export default CalendarStack;
