import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

const ViewInsetTop = ({ children, style }: ViewProps) => {
	const { top } = useSafeAreaInsets();
	const { colors } = useTheme();

	return (
		<View
			style={[
				{
					paddingTop: top,
					backgroundColor: colors.background,
					flex: 1,
				},
				style,
			]}
		>
			{children}
		</View>
	);
};

export default ViewInsetTop;
