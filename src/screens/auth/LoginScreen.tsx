import { View, Text } from "react-native";
import React from "react";
import { Input } from "components/input";
import { ViewInset } from "components/view";
import Global from "utils/constants/Global";
import { Button } from "components/button";
import { CustomTouchableOpacity } from "components/custom";
import { useNavigation, useTheme } from "@react-navigation/native";
import LoginMethod from "modules/LoginMethod";

const LoginScreen = () => {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();

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
					ログイン
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontSize: 18,
						marginBottom: 25,
					}}
				>
					お帰るなさい
				</Text>
				<Input label="Email" placeholder="メール" />
				<Input label="Password" placeholder="パスワード" />
				<Button
					onPress={() =>
						navigate("AppStack", { screen: "BottomTab" })
					}
				>
					ログイン
				</Button>
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
						アカウントをお持ちでない方？
					</Text>
					<CustomTouchableOpacity
						onPress={() => navigate("SignupScreen")}
					>
						<Text
							style={{
								color: colors.primary,
								fontWeight: "600",
							}}
						>
							新規登録
						</Text>
					</CustomTouchableOpacity>
				</View>
			</View>

			<View>
				<Text
					style={{
						textAlign: "center",
						marginBottom: 20,
						color: colors.icon,
					}}
				>
					他の方法
				</Text>
				<LoginMethod />
			</View>
		</ViewInset>
	);
};

export default LoginScreen;
