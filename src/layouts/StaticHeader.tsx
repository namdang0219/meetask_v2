import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalConstants } from "utils/constants/constant";
import { BlurView } from "expo-blur";

type StaticHeaderProps = ViewProps & {
	background?: string;
};

const StaticHeader = ({
	background,
	children,
	...props
}: StaticHeaderProps) => {
	const { top } = useSafeAreaInsets();
	return (
		<BlurView {...props} tint="light" intensity={50}>
			<View
				style={{
					height: top,
					backgroundColor: background || "transparent",
				}}
			></View>
			<View
				style={{
					height: 50,
					// borderBottomColor: "gray",
					// borderBottomWidth: 0.2,
					paddingHorizontal: globalConstants.padding,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 16,
					backgroundColor: background || "transparent",
				}}
			>
				{children}
			</View>
		</BlurView>
	);
};

export default StaticHeader;
