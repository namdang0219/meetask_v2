import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "screens/app/home";
import { AnalyticScreen } from "screens/app/analytic";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
	return (
		<Drawer.Navigator initialRouteName="HomeScreen">
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="AnalyticScreen" component={AnalyticScreen} />
		</Drawer.Navigator>
	);
};

export default HomeDrawer;
