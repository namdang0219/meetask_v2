import React from "react";
import Svg, { Path, G } from "react-native-svg";

const AnalyticIcon = ({ color = "currentColor" }: { color?: string }) => {
	return (
		<Svg width={34} height={34} viewBox="0 0 24 24">
			<G
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.2}
				color="currentColor"
			>
				<Path d="M6.5 17.5v-3m5 3v-9m5 9v-4m5-8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></Path>
				<Path d="M21.496 11s.004.34.004 1c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.717 1.391-8.109C5.282 2.5 7.521 2.5 12 2.5h1"></Path>
			</G>
		</Svg>
	);
};

export default AnalyticIcon;
