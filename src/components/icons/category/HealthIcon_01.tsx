import React from "react";
import Svg, { G, Path } from "react-native-svg";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const HealthIcon_01 = ({
	size = Global.categoryIcon.size,
	color = "black",
}: IconComponentProps) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24">
			<G fill="none">
				<Path
					fill={color}
					d="m8.962 19.379l-.473.582zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-2.566-2.204c-1.45-1.176-3.142-2.719-4.466-4.408c-1.339-1.707-2.218-3.46-2.218-5.07h-1.5c0 2.117 1.13 4.202 2.537 5.996c1.422 1.813 3.21 3.436 4.702 4.647zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789z"
				></Path>
				<Path
					stroke={color}
					strokeLinecap="round"
					strokeWidth={1.55}
					d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"
				></Path>
			</G>
		</Svg>
	);
};

export default HealthIcon_01;
