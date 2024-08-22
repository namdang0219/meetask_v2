import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const ShoppingIcon_02 = ({
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
				strokeWidth={2}
			>
				<Circle cx={8} cy={21} r={1}></Circle>
				<Circle cx={19} cy={21} r={1}></Circle>
				<Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></Path>
			</G>
		</Svg>
	);
};

export default ShoppingIcon_02;
