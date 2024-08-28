import { Text, TextProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const LabelSmall = ({ children, ...props }: TextProps) => {
	const { colors } = useTheme();
	return (
		<Text style={{ color: colors.icon }} {...props}>
			{children}
		</Text>
	);
};

export default LabelSmall;