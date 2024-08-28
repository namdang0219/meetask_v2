import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableOpacity } from "components/custom";

const CreateTaskIcon = ({
	size = 30,
	onPress,
}: {
	size?: number;
	onPress?: () => void;
}) => {
	return (
		<CustomTouchableOpacity
			style={{ marginTop: 4, marginHorizontal: 12 }}
			onPress={onPress}
		>
			<LinearGradient
				colors={["#A230ED", "#6B00D7"]}
				style={{
					width: 50,
					height: 50,
					borderRadius: 1000,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Svg width={size} height={size} viewBox="0 0 24 24">
					<Path
						fill="white"
						fillRule="evenodd"
						d="M13 13v7a1 1 0 0 1-2 0v-7H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 2 0v7h7a1 1 0 0 1 0 2z"
					></Path>
				</Svg>
			</LinearGradient>
		</CustomTouchableOpacity>
	);
};

export default CreateTaskIcon;
