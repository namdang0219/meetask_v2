import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const InputSmall = ({ ...props }: TextInputProps) => {
	const { colors } = useTheme();

	return (
		<TextInput
			style={{
				paddingVertical: 2.5,
				borderBottomColor: colors.icon,
				borderBottomWidth: 0.5,
				fontSize: 16,
			}}
			{...props}
		/>
	);
};

export default InputSmall;
