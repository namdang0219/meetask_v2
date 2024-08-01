import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { ThemedText } from "components/themed";
import { Button } from "components/buttons";
import { useNavigation } from "@react-navigation/native";
import { SafeView } from "layouts";
import { globalConstants } from "utils/constants/constant";

const WalkThrough = () => {
	const { navigate } = useNavigation<any>();
	return (
		<SafeView style={{paddingHorizontal: globalConstants.padding}}>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View style={{ marginTop: -45 }}>
					<View style={{ alignItems: "center", marginBottom: 32 }}>
						<Image
							source={require("../../../assets/images/walkthrough.png")}
								style={{ width: 280, height: 280 }}
							></Image>
					</View>
					<ThemedText
						style={{
							textAlign: "center",
							fontSize: 24,
							lineHeight: 35,
						}}
					>
						MeeTaskへようこそ
					</ThemedText>
					<ThemedText
						style={{
							textAlign: "center",
							fontSize: 24,
							lineHeight: 35,
						}}
					>
						タスクをシンプルに楽しく管理しましょう！
					</ThemedText>
				</View>
			</View>
			<Button
				onPress={() => navigate("Register")}
				style={{ marginBottom: 16 }}
			>
				開始
			</Button>
		</SafeView>
	);
};

export default WalkThrough;
