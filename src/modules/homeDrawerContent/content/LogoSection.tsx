import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const LogoSection = () => {
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		logoContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: 6,
		},
		logoImage: {
			width: 40,
			height: 40,
		},
		logoTextContainer: {
			flexDirection: "row",
			alignItems: "baseline",
			gap: 10,
		},
		logoName: {
			fontSize: 24,
			fontWeight: "500",
			lineHeight: 26,
			color: colors.text,
		},
		version: { color: colors.icon, fontSize: 12 },
	});
	return (
		<View style={styles.logoContainer}>
			<Image
				source={require("./../../../../assets/images/logo-transparent.png")}
				style={styles.logoImage}
			/>
			<View style={styles.logoTextContainer}>
				<Text style={styles.logoName}>MeeTask</Text>
				<Text style={styles.version}>verion 1.00</Text>
			</View>
		</View>
	);
};

export default LogoSection;
