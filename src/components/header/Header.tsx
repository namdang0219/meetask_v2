import { View, Text, ViewProps, StyleSheet, TextProps } from "react-native";
import React, { ReactNode } from "react";
import Global from "utils/constants/Global";
import { Entypo } from "@expo/vector-icons";
import { currentRoute } from "utils/func";
import { CustomTouchableOpacity } from "components/custom";
import { useNavigation, useTheme } from "@react-navigation/native";
import { lightTheme } from "utils/theme/themeColors";

type HeaderProps = ViewProps & {
	type: "onlyTitle" | "titleWithBack" | "custom";
	title: string;
	customHeaderRight?: ReactNode;
	containerStyle?: ViewProps["style"];
	titleStyle?: TextProps["style"];
	backButtonColor?: string;
};

const Header = ({
	type = "onlyTitle",
	title = "",
	customHeaderRight = <></>,
	containerStyle = {},
	titleStyle = {},
	backButtonColor =lightTheme.colors.primary,
}: HeaderProps) => {
	const { goBack } = useNavigation();
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		container: {
			height: 50,
			flexDirection: "row",
			alignItems: "center",
			paddingHorizontal: Global.padding,
			justifyContent: "space-between",
		},
		onlyTitleText: { fontSize: 24, fontWeight: "500" },
		titleWithBackContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: 6,
		},
		titleWithBackText: {
			fontSize: 18,
			fontWeight: "400",
			marginTop: -4,
			color: colors.primary,
		},
	});

	return (
			<View style={[styles.container, containerStyle]}>
				{/* only title  */}
				{type === "onlyTitle" && (
					<Text style={[styles.onlyTitleText, titleStyle]}>
						{title}
					</Text>
				)}

				{/* title with back button  */}
				{type === "titleWithBack" && (
					<CustomTouchableOpacity
						style={styles.titleWithBackContainer}
						onPress={goBack}
					>
						<Entypo
							name="chevron-thin-left"
							size={20}
							color={backButtonColor}
						/>
						<Text style={[styles.titleWithBackText, titleStyle]}>
							{title ? title : currentRoute().name}
						</Text>
					</CustomTouchableOpacity>
				)}

				{/* custom right container  */}
				{type === "custom" && (
					<>
						<Text style={[styles.onlyTitleText, titleStyle]}>
							{title}
						</Text>
						{customHeaderRight}
					</>
				)}
			</View>
	);
};



export default Header;
