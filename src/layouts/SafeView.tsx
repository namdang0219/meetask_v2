import {
	ViewProps,
	TouchableWithoutFeedback,
	Keyboard,
	StyleSheet,
	View,
} from "react-native";
import React from "react";
import { ThemedView } from "components/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalConstants } from "utils/constants/constant";


const SafeView = ({ children, style, ...props }: ViewProps) => {
	const {top, bottom} = useSafeAreaInsets();
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: top,
			paddingBottom: bottom,
			// paddingHorizontal: globalConstants.padding,
		},
	});
	return (
		<ThemedView style={[styles.container, style]} {...props}>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={() => Keyboard.dismiss()}
			>
				<View style={{ flex: 1 }}>{children}</View>
			</TouchableWithoutFeedback>
		</ThemedView>
	);
};

export default SafeView;
