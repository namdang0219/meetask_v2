import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalConstants } from "utils/constants/constant";

type StaticHeaderProps = ViewProps & {
	background?: string;
};

const StaticHeader = ({
	background = "white",
	children,
	...props
}: StaticHeaderProps) => {
	const { top } = useSafeAreaInsets();
	return (
		<View {...props}>
			<View style={{ height: top, backgroundColor: background }}></View>
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
					backgroundColor: background,
				}}
			>
				{children}
			</View>
		</View>
	);
};

export default StaticHeader;
