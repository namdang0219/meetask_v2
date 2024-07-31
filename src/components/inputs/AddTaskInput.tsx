import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TextInputProps,
} from "react-native";
import React, { useState } from "react";
import { globalConstants } from "utils/constants/constant";
import { useTintColor } from "hooks";
import { useTheme } from "@react-navigation/native";

type AddTaskInputProps = TextInputProps & {
	handleFullOpen: () => void;
	label: string;
	placeholder?: string;
};

const AddTaskInput = ({
	handleFullOpen,
	label,
	placeholder,
	...props
}: AddTaskInputProps) => {
	const [active, setActive] = useState<boolean>(false);
	const tintColor = useTintColor();
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		inputLabel: {
			fontWeight: "600",
			color: active ? tintColor : "gray",
			marginBottom: 8,
			marginLeft: 4,
		},
		inputField: {
			paddingHorizontal: 10,
			paddingVertical: 14,
			borderWidth: 1,
			borderColor: active ? tintColor : colors.border,
			borderRadius: 6,
		},
	});

	return (
		<View>
			<Text style={styles.inputLabel}>{label}</Text>
			<TextInput
				style={styles.inputField}
				onFocus={() => {
					handleFullOpen();
					setActive(true);
				}}
				onBlur={() => setActive(false)}
				placeholder={placeholder ? placeholder : label}
				{...props}
			/>
		</View>
	);
};

export default AddTaskInput;
