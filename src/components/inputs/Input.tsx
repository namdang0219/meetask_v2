import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/customs";
import { globalConstants } from "utils/constants/constant";

const Input = ({
	style,
	placeholder,
	error,
	onBlur,
	onChangeText,
	secureTextEntry,
}: TextInputProps & { error?: string | undefined }) => {
	const { colors } = useTheme();
	const [showPassword, setShowPassword] = useState(secureTextEntry);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	// Input styles
	const styles = StyleSheet.create({
		input: {
			backgroundColor: colors.inputBackground,
			paddingHorizontal: globalConstants.padding,
			paddingVertical: 18,
			borderRadius: globalConstants.borderRadius,
			color: colors.text,
		},
		error: {
			position: "absolute",
			bottom: 5,
			left: 20,
			fontSize: 12,
			color: "red",
		},
		eye: { position: "absolute", right: 16, top: 20 },
	});

	return (
		<View style={{ position: "relative" }}>
			<TextInput
				placeholder={placeholder}
				style={[styles.input, style]}
				onBlur={onBlur}
				onChangeText={onChangeText}
				autoComplete="off"
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry={showPassword}
			/>
			{secureTextEntry &&
				(showPassword ? (
					<CustomTouchableOpacity
						onPress={handleShowPassword}
						style={styles.eye}
					>
						<Feather
							name="eye-off"
							size={18}
							color={colors.bottomIconDefault}
						/>
					</CustomTouchableOpacity>
				) : (
					<CustomTouchableOpacity
						onPress={handleShowPassword}
						style={styles.eye}
					>
						<Feather
							name="eye"
							size={18}
							color={colors.bottomIconDefault}
						/>
					</CustomTouchableOpacity>
				))}
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
};

export default Input;
