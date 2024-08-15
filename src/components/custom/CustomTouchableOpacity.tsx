import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";

const CustomTouchableOpacity = ({
	children,
	...props
}: TouchableOpacityProps) => {
	return (
		<TouchableOpacity activeOpacity={0.6} {...props}>
			{children}
		</TouchableOpacity>
	);
};

export default CustomTouchableOpacity;
