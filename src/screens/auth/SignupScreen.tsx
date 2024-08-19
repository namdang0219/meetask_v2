import React from "react";
import { ViewInset } from "components/view";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Global from "utils/constants/Global";
import { Input } from "components/input";
import { Button } from "components/button";
import { LoginMethod } from "modules";
import { CustomTouchableOpacity } from "components/custom";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
	const { navigate } = useNavigation<any>();

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

				<View
					style={{
						flexDirection: "row",
						gap: 4,
						alignItems: "center",
						justifyContent: "center",
						marginTop: 14,
					}}
				>
					<Text style={{ color: "gray" }}>
						既にアカウントをお持ちの方？
					</Text>
					<CustomTouchableOpacity
						onPress={() => navigate("LoginScreen")}
					>
						<Text
							style={{
								color: Global.colors.light.primary,
								fontWeight: "600",
							}}
						>
							ログイン
						</Text>
					</CustomTouchableOpacity>
				</View>
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
