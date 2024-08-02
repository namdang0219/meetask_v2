import { View, StyleSheet } from "react-native";
import React from "react";
import { TitleLarge } from "components/titles";
import { SubTitle } from "components/subTitle";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SafeView } from "layouts";
import { globalConstants } from "utils/constants/constant";
import { auth } from "firebase-config";
import { updateProfile } from "firebase/auth";

interface CreateUserInfoProps {
	firstName: string;
	lastName: string;
}

// userInfo Validation Schema
const userInfoSchema = Yup.object().shape({
	firstName: Yup.string()
		.required("名（ファーストネーム）は必須です")
		.min(3, "性（ファーストネーム）は3文字以上でなければなりません")
		.max(8, "性（ファーストネーム）は8文字を超えてはいけません"),

	lastName: Yup.string()
		.required("姓（ラストネーム）は必須です")
		.min(3, "名（ラストネーム）は3文字以上でなければなりません")
		.max(8, "名（ラストネーム）は8文字を超えてはいけません"),
});

const CreateUserInfo = () => {
	const { navigate } = useNavigation<any>();
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
		mode: "onChange",
		resolver: yupResolver(userInfoSchema),
	});

	const handleCreateUserInfo = async ({
		firstName,
		lastName,
	}: CreateUserInfoProps) => {
		if (!isValid) return;
		try {
			if (auth.currentUser) {
				await updateProfile(auth.currentUser, {
					displayName: `${firstName} ${lastName}`,
				});
			}
			navigate("AuthStack", { screen: "UploadAvatar" });
		} catch (error) {
			console.log(error);
		}
	};

	// CreateUserInfo styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
	});

	return (
		<SafeView style={{ paddingHorizontal: globalConstants.padding }}>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				情報入力
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>
				あなたについて教えてください
			</SubTitle>
			<View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur } }) => (
						<Input
							style={styles.input}
							placeholder="性"
							onBlur={onBlur}
							onChangeText={onChange}
							error={errors.firstName?.message}
						></Input>
					)}
					name="firstName"
				/>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur } }) => (
						<Input
							style={styles.input}
							placeholder="名"
							onBlur={onBlur}
							onChangeText={onChange}
							error={errors.lastName?.message}
						></Input>
					)}
					name="lastName"
				/>
			</View>
			<View style={{ marginTop: "auto", marginBottom: 16 }}>
				<Button
					loading={isSubmitting}
					onPress={handleSubmit(handleCreateUserInfo)}
				>
					保存
				</Button>
			</View>
		</SafeView>
	);
};

export default CreateUserInfo;
