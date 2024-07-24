import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
	const { top } = useSafeAreaInsets();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				header: () => (
					<View
						style={{ height: top, backgroundColor: "white" }}
					></View>
				),
			}}
		>
			<Stack.Screen name="Calendar" component={Calendar} />
		</Stack.Navigator>
	);
};

export default CalendarStack;
