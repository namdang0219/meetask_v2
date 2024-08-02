import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PickerScreen } from "examples";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { useTheme } from "@react-navigation/native";
import { globalConstants } from "utils/constants/constant";

const Analytic = () => {
	const { colors } = useTheme();
	const styles = StyleSheet.create({
		headerBackContainer: {
			flexDirection: "row",
			gap: 6,
			alignItems: "center",
			opacity: 0.85,
		},
		headerBackText: {
			fontSize: 20,
			color: "white",
			fontWeight: "500",
		},
		avatarContainer: {
			alignItems: "center",
			marginTop: -78,
			position: "relative",
		},
		avatar: {
			width: 148,
			height: 148,
			backgroundColor: colors.background,
			borderRadius: 1000,
			alignItems: "center",
			justifyContent: "center",
		},
		editIcon: {
			position: "absolute",
			width: 30,
			height: 30,
			borderRadius: 100,
			backgroundColor: "white",
			alignItems: "center",
			justifyContent: "center",
			bottom: 6,
			right: 6,
			shadowColor: "gray",
			shadowOffset: { width: 2, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 2,
			borderWidth: 1,
			borderColor: colors.inputBackground,
		},
		displayName: {
			marginTop: 4,
			fontSize: 24,
			fontWeight: "500",
		},
		email: {
			marginTop: 4,
			fontSize: 16,
			color: colors.subText,
		},
		descContainer: {
			fontWeight: "700",
			lineHeight: 20,
			fontSize: 15,
		},
		desc: { fontWeight: "400", color: "gray" },
		join: {
			fontWeight: "700",
			lineHeight: 20,
			fontSize: 15,
		},
		joinDate: { fontWeight: "400", color: "gray" },
		progressWheelContainer: {
			marginHorizontal: "auto",
			marginBottom: 8,
			width: 180,
			height: 180,
			alignItems: "center",
			justifyContent: "center",
		},
		focusContainer: {
			width: 180,
			height: 180,
			marginHorizontal: "auto",
			marginBottom: 6,
			alignItems: "center",
			justifyContent: "center",
		},
		focusText: {
			fontSize: 30,
			fontWeight: "600",
			color: "gray",
			marginTop: 8,
		},
		contentContainer: {
			paddingTop: 16,
			paddingHorizontal: globalConstants.padding,
			gap: 12,
			marginBottom: 20,
		},
	});
	return (
		<View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
			{/* <PickerScreen></PickerScreen> */}
			<View style={styles.progressWheelContainer}>
				<AnimatedProgressWheel
					size={160}
					width={16}
					color={"#03c03c"}
					progress={65}
					backgroundColor={colors.inputBackground}
					duration={1000}
					showProgressLabel
					rotation={"-90deg"}
					labelStyle={{
						color: "#03c03c",
						fontWeight: "600",
						fontSize: 32,
					}}
					subtitle={"完了"}
					subtitleStyle={{ fontSize: 16 }}
					showPercentageSymbol
					rounded
				/>
				<Text style={{marginTop: 10}}>今日のタスク完了率</Text>
			</View>
			<View style={styles.progressWheelContainer}>
				<AnimatedProgressWheel
					size={160}
					width={16}
					color={"orange"}
					progress={50}
					backgroundColor={colors.inputBackground}
					duration={1000}
					showProgressLabel
					rotation={"-90deg"}
					labelStyle={{
						color: "orange",
						fontWeight: "600",
						fontSize: 32,
					}}
					subtitle={"完了"}
					subtitleStyle={{ fontSize: 16 }}
					showPercentageSymbol
					rounded
				/>
				<Text style={{marginTop: 10}}>今月のタスク完了率</Text>
			</View>
		</View>
	);
};

export default Analytic;
