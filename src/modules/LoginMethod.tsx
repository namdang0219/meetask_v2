import { Alert, View } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "components/custom";
import { GoogleIcon, FacebookIcon, AppleIcon } from "components/icons/loginMethod";
import Global from "utils/constants/Global";

const LoginMethod = () => {
	const handleLoginMethod = () => {
		Alert.alert("警告","この機能は開発中ですから、ご利用できません！")
	}

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "center",
				gap: 10,
				marginBottom: 20,
			}}
		>
			{loginMethods.map((method) => (
				<CustomTouchableOpacity
					key={method.name}
					onPress={handleLoginMethod}
					style={{
						backgroundColor: Global.colors.light.lightGray,
						width: 40,
						height: 40,
						borderRadius: 100,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{method.icon}
				</CustomTouchableOpacity>
			))}
		</View>
	);
};

export default LoginMethod;

const loginMethods = [
	{
		name: "Google",
		icon: <GoogleIcon />,
	},
	{
		name: "Facebook",
		icon: <FacebookIcon />,
	},
	{
		name: "Apple",
		icon: <AppleIcon />,
	},
];
