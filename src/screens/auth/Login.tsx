import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { TitleLarge } from "components/titles";
import { SubTitle } from "components/subTitle";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import { CustomTouchableOpacity } from "components/customs";
import { ThemedText } from "components/themed";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SafeView } from "layouts";
import LoginMethod from "modules/auth/LoginMethod";
import { globalConstants } from "utils/constants/constant";

interface LoginProps {
	email: string;
	password: string;
}

// login Validation Schema
const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please enter a valid email address")
		.required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password length should be at least 6 characters")
		.max(12, "Password cannot exceed more than 12 characters"),
});

const Login = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();

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
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = async ({ email, password }: LoginProps) => {
		// if (!isValid) return;
		// try {
		// 	await signInWithEmailAndPassword(auth, email, password);
		// 	navigate("AppStack", { screen: "BottomTab" });
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	// Register styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
	});

	return (
		<SafeView style={{paddingHorizontal: globalConstants.padding}}>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Login
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>Hi, Welcome back!</SubTitle>
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
			</View>
			<CustomTouchableOpacity style={{ marginBottom: 16 }}>
				<ThemedText style={{ textAlign: "right" }}>
					Forgot Password?
				</ThemedText>
			</CustomTouchableOpacity>
			<Button onPress={handleSubmit(handleLogin)} loading={isSubmitting}>
				Login
			</Button>
			<Text style={{ textAlign: "center", marginTop: 20 }}>
				<ThemedText>
					Don't have an account?<Text> </Text>
				</ThemedText>
				<Text
					style={{
						color: colors.primary,
						fontWeight: "500",
					}}
					onPress={() => navigate("Register")}
				>
					Register
				</Text>
			</Text>
			<LoginMethod></LoginMethod>
		</SafeView>
	);
};

export default Login;
