import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "routes/app/BottomTab";
import { FullView } from "layouts";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	return (
		<FullView>
			<Stack.Navigator screenOptions={{
				headerShown: false,
			}}>
				<Stack.Screen name="BottomTab" component={BottomTab} />
			</Stack.Navigator>
		</FullView>
	);
};

export default RootNavigation;
