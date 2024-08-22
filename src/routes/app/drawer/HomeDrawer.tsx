import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoryScreen, HomeScreen } from "screens/app/home";
import { categoryMocks } from "mock/categoryMocks";
import HomeDrawerContent from "modules/homeDrawerContent/HomeDrawerContent";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			drawerContent={() => <HomeDrawerContent></HomeDrawerContent>}
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
