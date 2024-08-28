import { View, ViewProps } from "react-native";
import React from "react";

const ViewFull = ({ children, style }: ViewProps) => {
	return (
		<View style={[{ flex: 1, backgroundColor: "white" }, style]}>
			{children}
		</View>
	);
};

export default ViewFull;
