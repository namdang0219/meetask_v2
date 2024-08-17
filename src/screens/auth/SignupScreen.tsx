import React from "react";
import { ViewInset } from "components/view";
import { Text, View } from "react-native";
import Global from "utils/constants/Global";
import { Input } from "components/input";
import { Button } from "components/button";
import { LoginMethod } from "modules";

const SignupScreen = () => {
	return (
		<ViewInset
			style={{
				paddingHorizontal: Global.padding,
				justifyContent: "space-between",
			}}
		>
			<View>
				<Text
					style={{
						textAlign: "center",
						fontSize: 28,
						fontWeight: "600",
						marginTop: 40,
						marginBottom: 25,
					}}
				>
					新規登録
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontSize: 18,
						marginBottom: 25,
					}}
				>
					MeeTaskへようこそ！
				</Text>
				<Input label="Email" placeholder="メール" />
				<Input label="Password" placeholder="パスワード" />
				<Input label="Confirm Password" placeholder="パスワード確認" />
				<Button>登録</Button>
			</View>

			<View>
				<Text
					style={{
						textAlign: "center",
						marginBottom: 20,
						color: Global.colors.light.gray,
					}}
				>
					他の方法
				</Text>
				<LoginMethod />
			</View>
		</ViewInset>
	);
};

export default SignupScreen;
