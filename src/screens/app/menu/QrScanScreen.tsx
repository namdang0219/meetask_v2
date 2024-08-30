import {
	View,
	Text,
	useWindowDimensions,
	StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Header } from "components/header";
import { ViewFull } from "components/view";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/custom";
import {
	BarcodeScanningResult,
	CameraView,
	useCameraPermissions,
} from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const QrScanScreen = () => {
	const { width } = useWindowDimensions();
	const { top } = useSafeAreaInsets();
	const [activeTab, setActiveTab] = useState<"code" | "scan">("code");
	const [status, requestPermission] = useCameraPermissions();
	const { navigate } = useNavigation<any>();

	if (!status?.granted) {
		requestPermission();
	}

	const handleScanned = (scanningResult: BarcodeScanningResult) => {
		console.log(
			"🚀 ~ handleScanned ~ scanningResult:",
			scanningResult.data
		);
		navigate("ProfileScreen");
	};

	const styles = StyleSheet.create({
		container: {
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "transparent",
		},
		title: {
			fontSize: 24,
			fontWeight: "700",
			color: "white",
			textAlign: "center",
			marginBottom: 30,
		},
		codeContainer: {
			marginBottom: 26,
			width: (width / 3) * 2,
			height: (width / 3) * 2,
			borderRadius: 20,
			borderColor: "white",
			borderWidth: 2,
			justifyContent: "center",
			alignItems: "center",
		},
		tabContainer: {
			flexDirection: "row",
			height: 50,
			width: (width / 3) * 2,
			alignItems: "center",
		},
		tabItem: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		tabCenterLine: {
			height: 50,
			width: 1,
			backgroundColor: "white",
		},
		tabName: {
			color: "white",
			fontSize: 16,
			fontWeight: "500",
		},
		textSub: { textAlign: "center", color: "white" },
		cameraContainer: {
			height: 250,
			width: 250,
		},
	});

	return (
		<ViewFull>
			<LinearGradient
				colors={["#A230ED", "#6B00D7"]}
				style={{
					flex: 1,
					paddingTop: top,
				}}
			>
				<Header
					type="titleWithBack"
					title="QR Scanner"
					titleStyle={{ color: "white" }}
					backButtonColor="white"
				></Header>
				<ViewFull style={styles.container}>
					{/* code area  */}
					<View
						style={{
							marginBottom: 100,
						}}
					>
						<Text style={styles.title}>
							{activeTab == "code" ? "私のコード" : "スキャン"}
						</Text>
						<View style={styles.codeContainer}>
							{activeTab == "code" ? (
								// code tab
								<MaterialIcons
									name="qr-code-2"
									size={(width / 3) * 2}
									color="white"
								/>
							) : (
								// scan tab
								<View
									style={{
										width: 250,
										height: 250,
										borderRadius: 12,
										overflow: "hidden",
									}}
								>
									<CameraView
										active={false}
										barcodeScannerSettings={{
											barcodeTypes: ["qr"],
										}}
										onBarcodeScanned={(
											scanningResult: BarcodeScanningResult
										) => handleScanned(scanningResult)}
										style={{ flex: 1 }}
									/>
								</View>
							)}
						</View>
						<View style={{ gap: 4 }}>
							<Text style={styles.textSub}>
								相手にスキャンさせてあげてください。
							</Text>
							<Text style={styles.textSub}>
								簡単に友達になることができます。
							</Text>
						</View>
					</View>

					{/* tab view area  */}
					<View style={styles.tabContainer}>
						<CustomTouchableOpacity
							onPress={() => setActiveTab("code")}
							style={styles.tabItem}
						>
							<Text
								style={[
									styles.tabName,
									{
										opacity: activeTab == "code" ? 1 : 0.5,
									},
								]}
							>
								私のコード
							</Text>
						</CustomTouchableOpacity>
						<View style={styles.tabCenterLine} />
						<CustomTouchableOpacity
							onPress={() => setActiveTab("scan")}
							style={styles.tabItem}
						>
							<Text
								style={[
									styles.tabName,
									{
										opacity: activeTab == "code" ? 0.5 : 1,
									},
								]}
							>
								スキャン
							</Text>
						</CustomTouchableOpacity>
					</View>
				</ViewFull>
			</LinearGradient>
		</ViewFull>
	);
};

export default QrScanScreen;
