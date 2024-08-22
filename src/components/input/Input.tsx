import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import Global from "utils/constants/Global";
import { useTheme } from "@react-navigation/native";

type InputProps = TextInputProps & {
	label?: string;
	placeholder?: string;
	error?: string;
};

const Input = ({
	label = "",
	placeholder = "example...",
	error = "",
}: InputProps) => {
	const { colors } = useTheme();
	return (
		<View style={{ marginBottom: 24, position: "relative" }}>
			{label && (
				<Text style={{ fontSize: 16, marginBottom: 6, marginLeft: 10 }}>
					{label}
				</Text>
			)}
			<TextInput
				placeholder={placeholder}
				style={{
					backgroundColor: colors.input,
					paddingHorizontal: Global.padding,
					paddingVertical: 14,
					borderRadius: 10,
				}}
				autoCapitalize="none"
				autoComplete="off"
				autoCorrect={false}
			/>
			{error && (
				<Text style={{ color: "red", position: 'absolute', bottom: -20, fontSize: 12, marginLeft: 10 }}>
					{error}
				</Text>
			)}
		</View>
	);
};

export default Input;
