import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const XIcon = () => {
	return (
		<Svg width={30} height={30} viewBox="0 0 14 14">
			<G fill="none">
				<G clipPath="url(#primeTwitter0)">
					<Path
						fill="black"
						d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
					></Path>
				</G>
				<Defs>
					<ClipPath id="primeTwitter0">
						<Path fill="#fff" d="M0 0h14v14H0z"></Path>
					</ClipPath>
				</Defs>
			</G>
		</Svg>
	);
};

export default XIcon;
