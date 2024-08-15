import { View, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainLayout = ({ children, style }: ViewProps) => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={[{ paddingTop: top, flex: 1 }, style]}>{children}</View>
	);
};

export default MainLayout;
