import { createDrawerNavigator } from "@react-navigation/drawer";
import { FlatList, Text, View } from "react-native";
import Home from "screens/app/drawer/home/Home";
import { useTheme } from "@react-navigation/native";
import HomeDrawerHeader from "modules/app/HomeDrawerHeader";
import { taskMocks } from "mocks";
import { useCategory } from "contexts/category-context";
import { CategoryType, TaskType } from "utils/types";
import { useTask } from "contexts/task-context";
import React from "react";

const Drawer = createDrawerNavigator();

function HomeDrawer() {
	const { categories } = useCategory();

	return (
		<Drawer.Navigator
			screenOptions={({ navigation }) => ({
				header: () => (
					<HomeDrawerHeader
						navigation={navigation}
					></HomeDrawerHeader>
				),
			})}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{ drawerLabel: "すべてのタスク" }}
			/>
			{categories &&
				categories.map((category) => (
					<Drawer.Screen
						key={category.categoryId}
						name={category.name}
						component={CategoryScreen}
						initialParams={{ category }}
					/>
				))}
		</Drawer.Navigator>
	);
}

export default HomeDrawer;

const CategoryScreen = React.memo(({ route }: { route: any }) => {
	const { category } = route.params;
	const { tasks } = useTask();

	const filteredTasks =
		(tasks &&
			tasks.filter(
				(task: TaskType) => task.category === category.name
			)) ||
		[];

	return (
		<View>
			<Text>Tasks for {category.name}:</Text>
			<FlatList
				data={filteredTasks}
				keyExtractor={(item) => item.taskId}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</View>
	);
});
