import { View, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ViewInsetBottom = ({ children, style }: ViewProps) => {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			style={[
				{ paddingTop: bottom, backgroundColor: "white", flex: 1 },
				style,
			]}
		>
			{children}
		</View>
	);
};

export default ViewInsetBottom;
