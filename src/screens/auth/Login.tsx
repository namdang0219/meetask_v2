import { View, Text, StyleSheet, Alert } from "react-native";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-config";

interface LoginProps {
	email: string;
	password: string;
}

// login Validation Schema
const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email("有効なメールアドレスを入力してください")
		.required("メールアドレスは必須です"),
	password: Yup.string()
		.required("パスワードは必須です")
		.min(6, "パスワードの長さは6文字以上である必要があります")
		.max(12, "パスワードの長さは12文字を超えてはいけません"),
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
		if (!isValid) return;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("BottomTab");
		} catch (error: any) {
			console.log(error.message);
			if (
				error.message === "Firebase: Error (auth/invalid-credential)."
			) {
				Alert.alert(
					"メールかパスワードが間違っています。もう一度確認してください。"
				);
			}
		}
	};

	// Register styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
	});

	return (
		<SafeView style={{ paddingHorizontal: globalConstants.padding }}>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				ログイン
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>お帰りなさい</SubTitle>
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
					パスワード忘れた方
				</ThemedText>
			</CustomTouchableOpacity>
			<Button onPress={handleSubmit(handleLogin)} loading={isSubmitting}>
				ログイン
			</Button>
			<Text style={{ textAlign: "center", marginTop: 20 }}>
				<ThemedText>
					アカウントをお持ちでないですか？<Text> </Text>
				</ThemedText>
				<Text
					style={{
						color: colors.primary,
						fontWeight: "500",
					}}
					onPress={() => navigate("Register")}
				>
					登録
				</Text>
			</Text>
			<LoginMethod></LoginMethod>
		</SafeView>
	);
};

export default Login;
