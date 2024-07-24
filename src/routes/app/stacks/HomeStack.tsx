import { View, Text, Pressable } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeDrawer from "../drawers/HomeDrawer";
import StaticHeader from "../../../layouts/StaticHeader";
import { SimpleLineIcons } from "@expo/vector-icons";

import { ThemedText } from "components/themed";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	
	return (
		<>
			
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeDrawer" component={HomeDrawer} />
			</Stack.Navigator>
		</>
	);
};

export default HomeStack;
