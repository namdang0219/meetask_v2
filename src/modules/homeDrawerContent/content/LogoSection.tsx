import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const LogoSection = () => {
	return (
		<View style={styles.logoContainer}>
			<Image
				source={require("./../../../../assets/icon.png")}
				style={styles.logoImage}
			/>
			<View style={styles.logoTextContainer}>
				<Text style={styles.logoName}>MeeTask</Text>
				<Text style={styles.version}>verion 1.00</Text>
			</View>
		</View>
	);
};

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
		color: "#333",
		lineHeight: 26,
	},
	version: { color: "gray", fontSize: 12 },
});

export default LogoSection;
