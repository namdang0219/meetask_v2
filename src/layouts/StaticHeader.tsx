import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalConstants } from "utils/constants/constant";

const StaticHeader = ({ children, ...props }: ViewProps) => {
	const { top } = useSafeAreaInsets();
	return (
		<View {...props} >
			<View style={{height: top, backgroundColor: 'white'}}></View>
			<View
				style={{
					height: 50,
					borderBottomColor: "gray",
					borderBottomWidth: 0.2,
					paddingHorizontal: globalConstants.padding,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 16,
					backgroundColor: 'white'
				}}
			>
				{children}
			</View>
		</View>
	);
};

export default StaticHeader;
