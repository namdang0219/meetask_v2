import React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = ({color = 'currentColor'}: {color?: string}) => {
	return (
		<Svg width={36} height={36} viewBox="0 0 24 24">
			<Path
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
				d="M20 12H10m10-7H4m16 14H4"
			></Path>
		</Svg>
	);
};

export default MenuIcon;
