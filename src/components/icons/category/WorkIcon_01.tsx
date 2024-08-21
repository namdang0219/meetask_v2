import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Global from "utils/constants/Global";

const WorkIcon_01 = () => {
	return (
		<MaterialIcons
			name="work-outline"
			size={Global.categoryIcon.size}
			color={Global.categoryIcon.color}
		/>
	);
};

export default WorkIcon_01;
