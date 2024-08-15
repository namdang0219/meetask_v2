import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AboutScreen,
	HelpScreen,
	LanguageScreen,
	MenuScreen,
	NotificationScreen,
	PrivacyScreen,
	ProfileScreen,
	SettingScreen,
} from "screens/app/menu";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="MenuScreen"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="MenuScreen" component={MenuScreen} />
			<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
			<Stack.Screen
				name="NotificationScreen"
				component={NotificationScreen}
			/>
			<Stack.Screen name="LanguageScreen" component={LanguageScreen} />
			<Stack.Screen name="SettingScreen" component={SettingScreen} />
			<Stack.Screen name="AboutScreen" component={AboutScreen} />
			<Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
			<Stack.Screen name="HelpScreen" component={HelpScreen} />
		</Stack.Navigator>
	);
};

export default MenuStack;
