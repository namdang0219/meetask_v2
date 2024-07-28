import React, { useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "routes/auth/AuthStack";
import BottomTab from "routes/app/bottomTab/BottomTab";
import FocusStack from "routes/app/stacks/FocusStack";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	
	return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
				<Stack.Screen name="BottomTab" component={BottomTab} />
				<Stack.Screen name="FocusStack" component={FocusStack} />
			</Stack.Navigator>
	);
};

export default RootNavigation;
