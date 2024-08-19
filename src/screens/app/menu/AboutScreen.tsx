import {
	View,
	Text,
	ScrollView,
	Image,
	Share,
	Alert,
	StyleSheet,
} from "react-native";
import React from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import Global from "utils/constants/Global";
import {
	FacebookIcon,
	InstagramIcon,
	XIcon,
} from "components/icons/aboutSocial";
import { Button } from "components/button";

const AboutScreen = () => {
	const handleAppShare = async () => {
		try {
			const result = await Share.share({
				message: "MeeTaskを友達とシェアしましょう",
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
					Alert.alert("シェア済み");
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error: any) {
			Alert.alert(error.message);
		}
	};

	return (
		<ViewInsetTop>
			<Header type="titleWithBack" title="アバウト"></Header>
			<ScrollView style={styles.container}>
				<View>
					<Text style={styles.text}>
						This app was developed by{" "}
						<Text style={styles.highlightText}>
							MeeNetwork, LTD
						</Text>
						{"."}
					</Text>
					<Text style={styles.text}>
						With the mission of bringing simple and{" "}
						<Text style={styles.highlightText}>
							wonderful experiences
						</Text>{" "}
						in personal task management, we would like to introduce
						MeeTask - a great application that helps solve the
						difficulties of personal task management. The kernel
						works cross-platform on iOS and Android devices
					</Text>
				</View>

				<Image
					source={{
						uri: "https://i.pinimg.com/originals/a3/db/bf/a3dbbf829565a08779b111e296f57f17.jpg",
					}}
					style={styles.image}
				></Image>

				<View style={styles.shareContainer}>
					<Text style={{ fontSize: 16 }}>
						Also follow MeeTeam on:
					</Text>
					<View style={styles.shareItemContainer}>
						{followSocials.map((item) => (
							<View key={item.name}>{item.icon}</View>
						))}
					</View>
				</View>
				<Button style={styles.button} onPress={handleAppShare}>
					友達にシェア
				</Button>
			</ScrollView>
		</ViewInsetTop>
	);
};

const styles = StyleSheet.create({
	container: { paddingHorizontal: Global.padding },
	text: { fontSize: 18, lineHeight: 26 },
	highlightText: { color: Global.colors.light.primary },
	image: {
		width: 255,
		height: 255,
		marginHorizontal: "auto",
		backgroundColor: "cyan",
		marginTop: 40,
	},
	shareContainer: { alignItems: "center", marginTop: 30 },
	shareItemContainer: {
		flexDirection: "row",
		gap: 20,
		alignItems: "center",
		marginTop: 16,
	},
	button: {
		width: 160,
		height: 40,
		marginTop: 20,
		marginHorizontal: "auto",
	},
});

const followSocials = [
	{ name: "facebook", icon: <FacebookIcon /> },
	{ name: "instagram", icon: <InstagramIcon /> },
	{ name: "x", icon: <XIcon /> },
];

export default AboutScreen;
