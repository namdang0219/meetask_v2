import React from "react";
import Svg, { Path, G } from "react-native-svg";

const CalendarIcon = ({color = 'currentColor'}: {color?: string}) => {
	return (
		<Svg
			width={34}
			height={34}
			viewBox="0 0 24 24"
		>
			<G fill="none">
				<Path
					stroke={color}
					strokeWidth={1.2}
					d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z"
				></Path>
				<Path
					stroke={color}
					strokeLinecap="round"
					strokeWidth={1.2}
					d="M7 4V2.5M17 4V2.5M2.5 9h19"
				></Path>
				<Path
					fill={color}
					d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
				></Path>
			</G>
		</Svg>
	);
};

export default CalendarIcon;
