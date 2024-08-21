import { View, Text, FlatList } from "react-native";
import React from "react";
import { taskMocks } from "mock/taskMocks";
import Global from "utils/constants/Global";
import { ViewFull } from "components/view";
import { TaskType } from "utils/types/dataTypes";

const HomeScreen = () => {
	return (
		<ViewFull>
			<FlatList
				data={taskMocks}
				contentContainerStyle={{ minHeight: 1000 }}
				keyExtractor={(item) => item.tid}
				renderItem={({ item: task }: { item: TaskType }) => (
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
		</ViewFull>
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

export default HomeScreen;
