import {
	Keyboard,
	TouchableWithoutFeedback,
	View,
	ViewProps,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const ViewFull = ({ children, style }: ViewProps) => {
	const { colors } = useTheme();
	const handleKeyboard = () => {
		if (Keyboard.isVisible()) {
			Keyboard.dismiss();
			return;
		}
	};
	return (
		<TouchableWithoutFeedback
			onPress={() => handleKeyboard()}
			style={{ flex: 1 }}
		>
			<View style={[{ flex: 1, backgroundColor: colors.background }, style]}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ViewFull;
