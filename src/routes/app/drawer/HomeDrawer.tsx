import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoryScreen, HomeScreen } from "screens/app/home";
import { Text, View } from "react-native";
import { HomeDrawerContent } from "modules";
import { categoryMocks } from "mock/categoryMocks";
import { taskMocks } from "mock/taskMocks";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {

	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			drawerContent={({ navigation }) => (
				<HomeDrawerContent navigation={navigation}></HomeDrawerContent>
			)}
		>
			<Drawer.Screen name="HomeScreen" component={HomeScreen} />
			{categoryMocks.map((category) => (
				<Drawer.Screen
					key={category.cid}
					name={category.name}
					component={CategoryScreen}
					initialParams={{ category: category.name }}
				/>
			))}
		</Drawer.Navigator>
	);
};

export default HomeDrawer;
