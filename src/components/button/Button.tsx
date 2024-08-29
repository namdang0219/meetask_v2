import { Text } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "components/custom";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const Button = ({ children, style, ...props }: TouchableOpacityProps) => {
	const { colors } = useTheme();

	return (
		<CustomTouchableOpacity
			style={[
				{
					height: 60,
					backgroundColor: colors.primary,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 10,
					paddingHorizontal: 20,
				},
				style,
			]}
			{...props}
		>
			<Text style={{ color: "white", fontSize: 18, lineHeight: 22, fontWeight: '500' }}>{children}</Text>
		</CustomTouchableOpacity>
	);
};

export default Button;
