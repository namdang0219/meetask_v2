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

interface CreateUserInfoProps {
	firstName: string;
	lastName: string;
}

// userInfo Validation Schema
const userInfoSchema = Yup.object().shape({
	firstName: Yup.string()
		.required("First name is required")
		.min(3, "First name must be at least 3 characters")
		.max(8, "First name cannot exceed more than 8 characters"),

	lastName: Yup.string()
		.required("Last name is required")
		.min(3, "Last name must be at least 3 characters")
		.max(8, "Last name cannot exceed more than 8 characters"),
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
			// if (auth.currentUser) {
			// 	await updateProfile(auth.currentUser, {
			// 		displayName: `${firstName} ${lastName}`,
			// 	});
			// }
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
		<SafeView style={{paddingHorizontal: globalConstants.padding}}>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Create Your Info
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>
				Let's us known about you
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
							placeholder="First Name"
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
							placeholder="Last Name"
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
					Save
				</Button>
			</View>
		</SafeView>
	);
};

export default CreateUserInfo;
