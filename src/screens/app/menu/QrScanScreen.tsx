import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Header } from "components/header";
import { ViewFull, ViewInsetTop } from "components/view";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const QrScanScreen = () => {
	const { width } = useWindowDimensions();
	return (
		<ViewInsetTop>
			<LinearGradient
				colors={["#A230ED", "#6B00D7"]}
				style={{
					flex: 1,
				}}
			>
				<Header
					type="titleWithBack"
					title="QR Scanner"
					titleStyle={{ color: "white" }}
					backButtonColor="white"
				></Header>
				<ViewFull
					style={{
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "transparent",
					}}
				>
					{/* code area  */}
					<View
						style={{
							marginBottom: 100,
						}}
					>
							<Text
								style={{
									fontSize: 24,
									fontWeight: "700",
									color: "white",
                  textAlign: 'center',
                  marginBottom: 30
								}}
							>
								シェア
							</Text>
						<View
							style={{
								marginBottom: 26,
								width: (width / 3) * 2,
								height: (width / 3) * 2,
								borderRadius: 20,
								borderColor: "white",
								borderWidth: 2,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<MaterialIcons
								name="qr-code-2"
								size={(width / 3) * 2}
								color="white"
							/>
						</View>
						<View style={{ gap: 4 }}>
							<Text
								style={{ textAlign: "center", color: "white" }}
							>
								相手にスキャンさせてあげてください。
							</Text>
							<Text
								style={{ textAlign: "center", color: "white" }}
							>
								簡単に友達になることができます。
							</Text>
						</View>
					</View>

					{/* tab view area  */}
					<View
						style={{
							flexDirection: "row",
							height: 50,
							width: (width / 3) * 2,
							alignItems: "center",
						}}
					>
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 16,
									fontWeight: "500",
								}}
							>
								私のコード
							</Text>
						</View>
						<View
							style={{
								height: 50,
								width: 1,
								backgroundColor: "white",
							}}
						/>
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 16,
									fontWeight: "500",
								}}
							>
								スキャン
							</Text>
						</View>
					</View>
				</ViewFull>
			</LinearGradient>
		</ViewInsetTop>
	);
};

export default QrScanScreen;
