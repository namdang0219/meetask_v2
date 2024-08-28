import React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const HealthIcon_02 = ({
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
				strokeWidth={1.55}
			>
				<Rect
					width={18.5}
					height={18.5}
					x={2.75}
					y={2.75}
					rx={6}
				></Rect>
				<Path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M2.75 12.5H7l3-5l4 9l3-5h4.25"
				></Path>
			</G>
		</Svg>
	);
};

export default HealthIcon_02;
