import { createDrawerNavigator } from "@react-navigation/drawer";
import { FlatList, Text, View } from "react-native";
import Home from "screens/app/drawer/home/Home";
import { useTheme } from "@react-navigation/native";
import HomeDrawerHeader from "modules/app/HomeDrawerHeader";

const Drawer = createDrawerNavigator();

function HomeDrawer() {
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
			<Drawer.Screen name="Home" component={Home} />
			{categories.map((category) => (
				<Drawer.Screen
					key={category}
					name={category}
					component={CategoryScreen}
					initialParams={{ category, tasks }}
				/>
			))}
		</Drawer.Navigator>
	);
}

export default HomeDrawer;

const categories = ["Work", "Personal", "Shopping", "Business"];

const tasks = [
	{ id: 1, title: "Task 1", category: "Work" },
	{ id: 2, title: "Task 2", category: "Personal" },
	{ id: 3, title: "Task 5", category: "Personal" },
	// Add more tasks here
];

const CategoryScreen = ({ route }: { route: any }) => {
	const { category, tasks } = route.params;

	const filteredTasks = tasks.filter(
		(task: any) => task.category === category
	);

	return (
		<View>
			<Text>Tasks for {category}:</Text>
			<FlatList
				data={filteredTasks}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</View>
	);
};
