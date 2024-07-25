import { View, Text, Pressable } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDrawer from "../drawers/HomeDrawer";
import StaticHeader from "../../../layouts/StaticHeader";
import { SimpleLineIcons } from "@expo/vector-icons";

import { ThemedText } from "components/themed";
import Profile from "screens/app/stacks/menuStacks/Profile";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	
	return (
		<>
			
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeDrawer" component={HomeDrawer} />
				<Stack.Screen name="Profile" component={Profile} />
			</Stack.Navigator>
		</>
	);
};

export default HomeStack;
