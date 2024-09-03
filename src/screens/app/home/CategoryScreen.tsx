import { View, Text, FlatList } from "react-native";
import React from "react";
import { taskMocks } from "mock/taskMocks";
import { TaskType } from "utils/types/dataTypes";
import Global from "utils/constants/Global";

const CategoryScreen = ({ route }: { route: any }) => {
	const { category } = route.params;

	const filteredTasks = taskMocks.filter(
		(task: TaskType) => task.category === category
	);

	return (
		<View style={{ marginTop: 50 }}>
			<Text
				style={{
					fontSize: 20,
					marginVertical: 10,
					textAlign: "center",
				}}
			>
				Tasks for {category}:
			</Text>
			<FlatList
				data={filteredTasks}
				contentContainerStyle={{ minHeight: 1000 }}
				keyExtractor={(item) => item.tid}
				renderItem={({ item: task }) => (
					<View
						style={{
							marginBottom: 10,
							paddingHorizontal: Global.padding,
							paddingVertical: 10,
							backgroundColor: setTaskColor(task.priority),
						}}
					>
						<Text
							style={{
								fontWeight: "600",
								fontSize: 18,
								color: "white",
							}}
						>
							{task.title}
						</Text>
						<Text style={{ color: "white" }}>
							{task.description}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

const setTaskColor = (priority: "LOW" | "NORMAL" | "HIGH") => {
	switch (priority) {
		case "LOW":
			return "green";
		case "NORMAL":
			return "pink";
		case "HIGH":
			return "orange";
		default:
			return "yellow";
	}
};

export default CategoryScreen;
