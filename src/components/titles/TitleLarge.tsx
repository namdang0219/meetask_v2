import {  TextProps } from "react-native";
import React from "react";
import { ThemedText } from "components/themed";

const TitleLarge = ({ children, style }: TextProps) => {
	return (
		<ThemedText
			style={[
				{ fontSize: 36, fontWeight: "500", textAlign: "center" },
				style,
			]}
		>
			{children}
		</ThemedText>
	);
};

export default TitleLarge;
