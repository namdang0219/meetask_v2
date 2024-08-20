import { View, Text, FlatList } from "react-native";
import React from "react";
import { categoryIcons } from "data/categoryIcons";
import { taskMocks } from "mock/taskMocks";
import { TaskType } from "utils/types/dataTypes";

const HomeScreen = () => {
	return (
		<>
			<FlatList
				data={taskMocks}
				contentContainerStyle={{ minHeight: 1000 }}
				keyExtractor={(item) => item.tid}
				renderItem={({ item: task }) => (
					<View
						style={{
							marginBottom: 10,
							backgroundColor: setTaskColor(task.priority),
						}}
					>
						<Text style={{ fontWeight: "600", fontSize: 18, color: 'white' }}>
							{task.title}
						</Text>
						<Text style={{color: 'white'}}>{task.description}</Text>
					</View>
				)}
			/>
			{/* <View>
      
            {taskMocks.map((task: TaskType) => (
        ))} */}
			{/* </View>  */}
		</>
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
