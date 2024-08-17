import { Text } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "components/custom";
import Global from "utils/constants/Global";
import { TouchableOpacityProps } from "react-native-gesture-handler";

const Button = ({ children, style }: TouchableOpacityProps) => {
	return (
		<CustomTouchableOpacity
			style={[
				{
					height: 60,
					backgroundColor: Global.colors.light.primary,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 10,
					paddingHorizontal: 20,
				},
				style,
			]}
		>
			<Text style={{ color: "white", fontSize: 18 }}>{children}</Text>
		</CustomTouchableOpacity>
	);
};

export default Button;
