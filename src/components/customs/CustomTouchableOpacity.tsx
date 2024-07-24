import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { globalConstants } from "utils/constants/constant";

const CustomTouchableOpacity = ({
	children,
	style,
	onPress,
}: TouchableOpacityProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={style}
			activeOpacity={globalConstants.activeOpacity}
		>
			{children}
		</TouchableOpacity>
	);
};

export default CustomTouchableOpacity;
