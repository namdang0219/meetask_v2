import {
	Text,
	TextProps,
	TouchableOpacity,
	TouchableOpacityProps,
	ActivityIndicator
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { globalConstants } from "utils/constants/constant";

type ButtonProps = TouchableOpacityProps & {
	textStyle?: TextProps["style"];
};

const Button = ({
	children,
	style,
	textStyle = { fontSize: 18, fontWeight: "500" },
	loading = false,
	...props
}: ButtonProps & { loading?: boolean }) => {
	const { colors } = useTheme();
	return (
		<TouchableOpacity
			activeOpacity={globalConstants.activeOpacity}
			style={[
				{
					backgroundColor: colors.primary,
					height: 60,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 10,
				},
				style,
			]}
			{...props}
		>
			{loading ?<ActivityIndicator color='white'  /> : <Text style={[{ color: "white" }, textStyle]}>{children}</Text>}
		</TouchableOpacity>
	);
};

export default Button;
