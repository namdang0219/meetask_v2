import {
	TouchableWithoutFeedback,
	ViewProps,
	Keyboard,
	View,
} from "react-native";
import React from "react";
import { ThemedView } from "components/themed";

const FullView = ({ children, style, ...props }: ViewProps) => {
	return (
		<ThemedView style={[{ flex: 1 }, style]} {...props}>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={() => Keyboard.dismiss()}
			>
				<View style={{flex: 1}}>{children}</View>
			</TouchableWithoutFeedback>
		</ThemedView>
	);
};

export default FullView;
