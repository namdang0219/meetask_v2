import React, { useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "routes/app/bottomTab/BottomTab";
import FocusStack from "routes/app/stacks/FocusStack";
import Toast from "react-native-toast-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AuthStack from "routes/auth/AuthStack";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	const { top } = useSafeAreaInsets();

	return (
		<>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="AuthStack" component={AuthStack} />
				<Stack.Screen name="BottomTab" component={BottomTab} />
				<Stack.Screen name="FocusStack" component={FocusStack} />
			</Stack.Navigator>
			<Toast topOffset={top + 10} visibilityTime={2000} />
		</>
	);
};

export default RootNavigation;
