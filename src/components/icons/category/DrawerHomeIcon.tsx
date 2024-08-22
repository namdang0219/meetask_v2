import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const DrawerHomeIcon = ({
	size = Global.categoryIcon.size,
	color = "black",
}: IconComponentProps) => {
	return <Ionicons name="home-outline" size={size} color={color} />;
};

export default DrawerHomeIcon;
