import { View, Text, Alert, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/customs";
import GoogleIcon from "components/icons/loginMethodIcons/GoogleIcon";
import FacebookIcon from "components/icons/loginMethodIcons/FacebookIcon";
import AppleIcon from "components/icons/loginMethodIcons/AppleIcon";

const LoginMethod = () => {
	const { colors } = useTheme();

	// Login method styles
	const styles = StyleSheet.create({
		text: {
			color: colors.primary,
			fontWeight: "500",
			textAlign: "center",
			marginBottom: 18,
		},
		methodContainer: {
			flexDirection: "row",
			gap: 10,
			justifyContent: "center",
		},
		method: {
			width: 42,
			height: 42,
			borderRadius: 100,
			backgroundColor: colors.inputBackground,
			justifyContent: "center",
			alignItems: "center",
		},
	});

	return (
		<View style={{ marginTop: "auto", marginBottom: 10 }}>
			<Text style={styles.text}>Or continue with</Text>
			<View style={styles.methodContainer}>
				{[<GoogleIcon />, <FacebookIcon />, <AppleIcon />].map(
					(item, index) => (
						<CustomTouchableOpacity
							key={index}
							onPress={() =>
								Alert.alert(
									"Opps",
									"This feature is not available yet!"
								)
							}
							style={styles.method}
						>
							{item}
						</CustomTouchableOpacity>
					)
				)}
			</View>
		</View>
	);
};

export default LoginMethod;
