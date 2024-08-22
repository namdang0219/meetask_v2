import React from "react";
import Svg, { Path } from "react-native-svg";
import Global from "utils/constants/Global";
import { IconComponentProps } from "utils/types/dataTypes";

const WorkIcon_02 = ({
	size = Global.categoryIcon.size,
	color = "black",
}: IconComponentProps) => {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 48 48"
		>
			<Path
				fill={color}
				fillRule="evenodd"
				d="M24 26c5.525 0 10-4.475 10-10S29.525 6 24 6s-10 4.475-10 10s4.475 10 10 10m8-10c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8m-2.965 11.874L26 36.544V36l-.575-4.021a1 1 0 0 0 .764-.736l.5-2A1 1 0 0 0 25.72 28h-3.438a1 1 0 0 0-.97 1.242l.5 2a1 1 0 0 0 .764.737l-.562 3.932l-3.054-8.048l-.02-.043a1.48 1.48 0 0 0-1.676-.791c-.341.083-.717.17-1.114.264c-.937.219-1.994.466-2.996.745c-1.413.394-2.877.89-3.894 1.558C7.387 30.826 6 32.453 6 34.5V42h36v-7.5c0-2.047-1.386-3.675-3.26-4.904c-1.016-.668-2.48-1.164-3.893-1.558a75 75 0 0 0-2.996-.745a127 127 0 0 1-1.114-.264a1.48 1.48 0 0 0-1.675.791zm2.409 1.378l-.713-.168L26.909 40H40v-5.5c0-1.046-.704-2.147-2.357-3.232c-.734-.483-1.93-.913-3.332-1.303a71 71 0 0 0-2.866-.713zm-14.162-.171L21.425 40H8v-5.5c0-1.046.704-2.147 2.357-3.232c.734-.483 1.93-.913 3.332-1.303a70 70 0 0 1 2.866-.713z"
				clipRule="evenodd"
			></Path>
		</Svg>
	);
};

export default WorkIcon_02;
