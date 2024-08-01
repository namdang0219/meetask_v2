import { View, StyleSheet, Text, Alert } from "react-native";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-config";

interface RegisterProps {
	email: string;
	password: string;
}

// Register Validation Schema
const registerSchema = Yup.object().shape({
	email: Yup.string()
		.email("正しいメールアドレスを入力してください")
		.required("メールアドレスを入力してください"),
	password: Yup.string()
		.required("パスワードを入力してください")
		.min(6, "パスワードの長さは6文字以上でなければなりません。")
		.max(12, "パスワードの長さは12文字を超えてはなりません。"),
	cpassword: Yup.string()
		.required("確認用パスワードは必須です。")
		.oneOf([Yup.ref("password")], "パスワードが一致しません。")
		.min(6, "パスワードの長さは6文字以上でなければなりません。")
		.max(12, "パスワードの長さは12文字を超えてはなりません。"),
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
		if (!checked) return alert("利用規約に同意してください。");
		if (!isValid) return;
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			navigate("AuthStack", { screen: "CreateUserInfo" });
		} catch (error: any) {
			if (error.code === "auth/email-already-in-use") {
				Alert.alert("このメールアドレスは既に使用されています。");
			}
		}
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
				新規登録
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>MeeTaskへようこそ</SubTitle>
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
				登録
			</Button>
			<Text style={{ textAlign: "center", marginTop: 20 }}>
				<ThemedText>
					既にアカウントをお持ちですか？<Text> </Text>
				</ThemedText>
				<Text
					style={{
						color: colors.primary,
						fontWeight: "500",
					}}
					onPress={() => navigate("Login")}
				>
					ログイン
				</Text>
			</Text>
			<LoginMethod></LoginMethod>
		</SafeView>
	);
};

export default Register;
