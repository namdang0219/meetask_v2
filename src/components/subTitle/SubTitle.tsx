import { TextProps } from "react-native";
import React from "react";
import { ThemedText } from "components/themed";

const SubTitle = ({ children, style }: TextProps) => {
	return (
		<ThemedText
			style={[
				{ fontWeight: "500", fontSize: 16, textAlign: "center" },
				style,
			]}
		>
			{children}
		</ThemedText>
	);
};

export default SubTitle;
