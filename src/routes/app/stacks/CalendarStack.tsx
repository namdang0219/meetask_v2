import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "screens/app/Calendar";

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Calendar" component={Calendar} />
		</Stack.Navigator>
	);
};

export default CalendarStack;
