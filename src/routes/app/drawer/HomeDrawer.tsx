import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "screens/app/home";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			screenOptions={({ navigation }) => ({
				drawerActiveBackgroundColor: "cyan",
				drawerActiveTintColor: "violet",
				drawerType: "front",
				drawerContentContainerStyle: {backgroundColor: 'yellow'},
				drawerContentStyle: {backgroundColor: 'pink'},
				
			})}
		>
			<Drawer.Screen name="Home" component={HomeScreen} />
		</Drawer.Navigator>
	);
};

export default HomeDrawer;
