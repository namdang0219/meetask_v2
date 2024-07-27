import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClockOne from "screens/app/focusModes/static/ClockOne";

const Stack = createNativeStackNavigator();

const FocusStack = () => {
  

	return (
		<Stack.Navigator screenOptions={{
      headerShown: false
    }}>
			<Stack.Screen name="ClockOne" component={ClockOne} />
		</Stack.Navigator>
	);
};

export default FocusStack;
