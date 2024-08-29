import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const InputSmall = ({ placeholder = '入力...', ...props }: TextInputProps) => {
	const { colors } = useTheme();

	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor={colors.icon}
			style={{
				height: 45,
				paddingHorizontal: 12,
				borderColor: colors.icon,
				borderWidth: 0.5,
				fontSize: 15,
				borderRadius: 6,
			}}
			{...props}
		/>
	);
};

export default InputSmall;
