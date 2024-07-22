import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

const NewTaskIcon = ({ onPress }: TouchableOpacityProps) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<LinearGradient
				colors={["#A230ED", "#6B00D7"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.container}
			>
				<Svg width={30} height={30} viewBox="0 0 24 24">
					<Path
						fill="white"
						d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1"
					></Path>
				</Svg>
			</LinearGradient>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: 48,
		height: 48,
		borderRadius: 100,
	},
});

export default NewTaskIcon;
