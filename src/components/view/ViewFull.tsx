import {
	Keyboard,
	TouchableWithoutFeedback,
	View,
	ViewProps,
} from "react-native";
import React from "react";

const ViewFull = ({ children, style }: ViewProps) => {
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
			<View style={[{ flex: 1, backgroundColor: "white" }, style]}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ViewFull;
