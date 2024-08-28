import { View, Text } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const ShoppingIcon_01 = ({
	size = Global.categoryIcon.size,
	color = "black",
}: IconComponentProps) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			<G
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.55}
			>
				<Path d="M4.484 6.219v12.14a2.89 2.89 0 0 0 2.891 2.891h9.25a2.89 2.89 0 0 0 2.89-2.89V6.218"></Path>
				<Path d="m19.516 6.219l-3.134-3.134a1.16 1.16 0 0 0-.82-.335H8.438a1.16 1.16 0 0 0-.821.335L4.484 6.22zM8.531 9.688l.359.705A2.89 2.89 0 0 0 11.48 12h1.04a2.89 2.89 0 0 0 2.59-1.607l.359-.705"></Path>
			</G>
		</Svg>
	);
};

export default ShoppingIcon_01;
