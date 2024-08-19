import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "routes/app/bottomTab/BottomTab";
import AuthStack from "routes/auth/AuthStack";
import AppStack from "routes/app/AppStack";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={({}) => ({
				headerShown: false,
			})}
		>
			{/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
			<Stack.Screen name="AppStack" component={AppStack} />
		</Stack.Navigator>
	);
};

export default RootNavigation;
