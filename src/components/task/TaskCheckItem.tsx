import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { RadioButton } from "react-native-ui-lib";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { TaskType } from "utils/types/dataTypes";

const TaskCheckItem = ({
	item: { tid, status, category, title },
}: {
	item: TaskType;
}) => {
	const { colors } = useTheme();
	const categories = useSelector((state: RootState) => state.category);

	return (
		<View>
			<RadioButton
				selected={status === "COMPLETE" ? true : false}
				label={title}
				// onPress={() => handleStatusChange(tid)}
				labelStyle={{
					fontSize: 16,
					marginLeft: 10,
					color: status === "COMPLETE" ? colors.icon : colors.text,
					textDecorationLine:
						status === "COMPLETE" ? "line-through" : "none",
				}}
				size={18}
				color={categories.find((c) => c.name === category)?.color}
			/>
		</View>
	);
};

export default TaskCheckItem;
