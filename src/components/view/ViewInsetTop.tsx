import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ViewInsetTop = ({ children, style }: ViewProps) => {
	const { top } = useSafeAreaInsets();

	return (
		<View
			style={[
				{ paddingTop: top, backgroundColor: "white", flex: 1 },
				style,
			]}
		>
			{children}
		</View>
	);
};

export default ViewInsetTop;
