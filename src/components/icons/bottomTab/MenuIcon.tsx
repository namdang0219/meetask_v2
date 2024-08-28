import React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = ({ color, size = 34 }: { color?: string; size?: number }) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			<Path
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.65}
				d="M4 5h16M4 12h16M4 19h16"
			></Path>
		</Svg>
	);
};

export default MenuIcon;
