import { View, Text, TextProps } from "react-native";
import React from "react";
import { StaticHeader } from "layouts";

const HeaderText = ({children = 'Header'} : TextProps) => {
	return (
		<StaticHeader style={{}}>
			<Text
				style={{
					fontWeight: "600",
					fontSize: 24,
					color: "black",
				}}
			>
				{children}
			</Text>
		</StaticHeader>
	);
};

export default HeaderText;
