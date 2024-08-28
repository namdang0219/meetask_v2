import {
	View,
	Text,
	ViewProps,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ViewInset = ({ children, style }: ViewProps) => {
	const { top, bottom } = useSafeAreaInsets();

	const handleKeyboard = () => {
		if (Keyboard.isVisible()) Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback style={{ flex: 1 }} onPress={handleKeyboard}>
			<View
				style={[
					{
						flex: 1,
						paddingTop: top,
						paddingBottom: bottom,
						backgroundColor: "white",
					},
					style,
				]}
			>
				{children}
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ViewInset;
