import { View, Text, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = ({ route }: { route: any }) => {
	const { category } = route.params;

	// const filteredTasks = tasks.filter((tasks) => task.category === category);

	return (
		<View>
			<Text>Tasks for {category}:</Text>
			{/* <FlatList
				data={filteredTasks}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/> */}
		</View>
	);
};

export default CategoryScreen;
