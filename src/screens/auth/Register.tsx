import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { TitleLarge } from "components/titles";
import { SubTitle } from "components/subTitle";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import { CheckBox } from "@rneui/themed";
import { ThemedText } from "components/themed";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SafeView } from "layouts";
import LoginMethod from "modules/auth/LoginMethod";
import { globalConstants } from "utils/constants/constant";

interface RegisterProps {
	email: string;
	password: string;
}

// Register Validation Schema
const registerSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please enter a valid email address")
		.required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password length should be at least 6 characters")
		.max(12, "Password cannot exceed more than 12 characters"),
	cpassword: Yup.string()
		.required("Confirm Password is required")
		.oneOf([Yup.ref("password")], "Passwords do not match")
		.min(6, "Password length should be at least 6 characters")
		.max(12, "Password cannot exceed more than 12 characters"),
});

const Register = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();
	const [checked, setChecked] = React.useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
		resolver: yupResolver(registerSchema),
	});

	// handle Registration
	const handleRegister = async ({ email, password }: RegisterProps) => {
		if (!checked) return alert("Please accept the terms and conditions");
		// if (!isValid) return;
		// try {
		// 	await createUserWithEmailAndPassword(auth, email, password);
		navigate("AuthStack", { screen: "CreateUserInfo" });
		// } catch (error: any) {
		// 	if (error.code === "auth/email-already-in-use") {
		// 		alert("Email already in use");
		// 	}
		// }
	};

	// Register styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
		checkboxText: {
			color: colors.text,
			fontSize: 14,
			fontWeight: "300",
			marginHorizontal: 0,
		},
		checkboxContainer: {
			marginTop: 0,
			paddingTop: 0,
			backgroundColor: "transparent",
		},
	});

	return (
		<SafeView style={{ paddingHorizontal: globalConstants.padding }}>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Register
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>Welcome to MeeTask</SubTitle>
			<View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur } }) => (
						<Input
							style={styles.input}
							placeholder="Email"
							onBlur={onBlur}
							onChangeText={onChange}
							error={errors.email?.message}
						></Input>
					)}
					name="email"
				/>

				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur } }) => (
						<Input
							style={styles.input}
							placeholder="Password"
							onBlur={onBlur}
							onChangeText={onChange}
							error={errors.password?.message}
							secureTextEntry
						></Input>
					)}
					name="password"
				/>

				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur } }) => (
						<Input
							style={styles.input}
							placeholder="Confirm Password"
							onBlur={onBlur}
							onChangeText={onChange}
							error={errors.cpassword?.message}
							secureTextEntry
						></Input>
					)}
					name="cpassword"
				/>
			</View>
			<CheckBox
				title="Accept all terms and privacy "
				checked={checked}
				onPress={() => setChecked(!checked)}
				textStyle={styles.checkboxText}
				containerStyle={styles.checkboxContainer}
				checkedColor={colors.primary}
			/>
			<Button
				onPress={handleSubmit(handleRegister)}
				loading={isSubmitting}
			>
				Register
			</Button>
			<Text style={{ textAlign: "center", marginTop: 20 }}>
				<ThemedText>
					Already have an account?<Text> </Text>
				</ThemedText>
				<Text
					style={{
						color: colors.primary,
						fontWeight: "500",
					}}
					onPress={() => navigate("Login")}
				>
					Login
				</Text>
			</Text>
			<LoginMethod></LoginMethod>
		</SafeView>
	);
};

export default Register;
