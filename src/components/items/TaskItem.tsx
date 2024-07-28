import { View, Text } from "react-native";
import React from "react";
import { RadioButton } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";

const TaskItem = ({task, handleTaskStatus}: {task: any, handleTaskStatus: any}) => {
  const {colors} = useTheme()

  const setTaskColor = (type: string) => {
		switch (type) {
			case "work":
				return "orange";
			case "study":
				return "green";
			case "shopping":
				return "blue";
			default:
				return colors.primary;
		}
	};

	return (
		<View key={task.id} style={{ paddingVertical: 6 }}>
			<RadioButton
				label={task.content}
				color={setTaskColor(task.type)}
				size={22}
				labelStyle={{
					marginLeft: 10,
					textDecorationLine: task.completed
						? "line-through"
						: "none",
					color: task.completed ? colors.subText : colors.text,
				}}
				selected={task.completed}
				onPress={() => handleTaskStatus(task.id)}
			/>
		</View>
	);
};

export default TaskItem;
