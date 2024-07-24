import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderText from "components/headers/HeaderText";
import Menu from "screens/app/stacks/menuStacks/Menu";
import Profile from "screens/app/stacks/menuStacks/Profile";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				header: () => <HeaderText>Menu</HeaderText>,
			}}
		>
			<Stack.Screen name="Menu" component={Menu} />
			<Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
		</Stack.Navigator>
	);
};

export default MenuStack;
