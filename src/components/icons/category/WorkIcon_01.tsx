import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const WorkIcon_01 = ({
	size = Global.categoryIcon.size,
	color = "black",
}: IconComponentProps) => {
	return <MaterialIcons name="work-outline" size={size} color={color} />;
};

export default WorkIcon_01;
