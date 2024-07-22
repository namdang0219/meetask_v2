import { View, ViewProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const ThemedView = ({ children, style, ...props }: ViewProps) => {
	const { colors } = useTheme();
	return (
		<View
			style={[{ backgroundColor: colors.background }, style]}
			{...props}
		>
			{children}
		</View>
	);
};

export default ThemedView;
