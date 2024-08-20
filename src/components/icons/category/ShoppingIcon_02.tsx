import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
import Global from "utils/constants/Global";

const ShoppingIcon_02 = () => {
	return (
		<Svg
			width={Global.categoryIcon.size}
			height={Global.categoryIcon.size}
			viewBox="0 0 24 24"
		>
			<G
				fill="none"
				stroke={Global.categoryIcon.color}
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
