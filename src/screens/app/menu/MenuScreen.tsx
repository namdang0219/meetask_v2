import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import {
	MaterialIcons,
	Entypo,
	Ionicons,
	AntDesign,
	Feather,
} from "@expo/vector-icons";
import Global from "utils/constants/Global";
import { CustomTouchableOpacity } from "components/custom";
import { MenuItemType } from "utils/types/MenuItemType";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const MenuScreen = () => {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		mainContainer: {
			backgroundColor: colors.input,
			gap: 6,
		},
		itemContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			paddingHorizontal: Global.padding + 4,
			alignItems: "center",
			backgroundColor: "white",
			paddingVertical: 12,
		},
		icon: {
			flexDirection: "row",
			gap: 10,
		},
	});

	const MenuItem = ({ item }: { item: MenuItemType }) => {
		return (
			<CustomTouchableOpacity
				onPress={() => navigate(item.navigate)}
				style={styles.itemContainer}
			>
				<View style={styles.icon}>
					{item.icon}
					<Text style={{ fontSize: 18, color: colors.text }}>{item.label}</Text>
				</View>
				<Entypo name="chevron-thin-right" size={22} />
			</CustomTouchableOpacity>
		);
	};

	return (
		<ViewInsetTop>
			<MenuHeader />
			<View style={styles.mainContainer}>
				<MenuProfile />
				{menuItems.map((list, index) => (
					<View key={index}>
						{list.map((item) => (
							<MenuItem key={item.label} item={item}></MenuItem>
						))}
					</View>
				))}
			</View>
		</ViewInsetTop>
	);
};

export default MenuScreen;

function MenuHeader() {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			alignItems: "center",
			gap: 4,
		},
		text: {
			fontSize: 16,
			color: colors.primary,
		},
	});
	return (
		<Header
			type="customOnlyTitle"
			title="Menu"
			renderHeaderRight={
				<CustomTouchableOpacity
					onPress={() => navigate("WalkThrought")}
					style={styles.container}
				>
					<Text style={styles.text}>ログアウト</Text>
					<MaterialIcons
						name="logout"
						size={20}
						color={colors.primary}
					/>
				</CustomTouchableOpacity>
			}
		></Header>
	);
}

function MenuProfile() {
	const { displayName, photoUrl, email } = useSelector(
		(state: RootState) => state.user
	);
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		container: {
			backgroundColor: "white",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			paddingVertical: 10,
			paddingHorizontal: Global.padding,
		},
		leftContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: 12,
		},
		avatar: {
			width: 68,
			height: 68,
			borderRadius: 1000,
			objectFit: "cover",
		},
		displayName: {
			fontSize: 24,
			fontWeight: "600",
			marginBottom: 4,
		},
		email: {
			fontSize: 16,
			fontWeight: "400",
			color: colors.icon,
		},
	});
	return (
		<CustomTouchableOpacity
			onPress={() => navigate("ProfileScreen")}
			style={styles.container}
		>
			{/* left container  */}
			<View style={styles.leftContainer}>
				<Image
					source={{
						uri: photoUrl,
					}}
					style={styles.avatar}
				/>
				<View>
					<Text style={styles.displayName}>{displayName}</Text>
					<Text style={styles.email}>{email}</Text>
				</View>
			</View>

			{/* right arrow  */}
			<Entypo name="chevron-thin-right" size={22} />
		</CustomTouchableOpacity>
	);
}

const menuItems: MenuItemType[][] = [
	[
		{
			label: "通知",
			icon: <Ionicons name="notifications-outline" size={26} />,
			navigate: "NotificationScreen",
		},
		{
			label: "言語",
			icon: <Ionicons name="language-outline" size={26} />,
			navigate: "LanguageScreen",
		},
		{
			label: "設定",
			icon: <AntDesign name="setting" size={26} />,
			navigate: "SettingScreen",
		},
	],
	[
		{
			label: "プライバシー",
			icon: <MaterialIcons name="privacy-tip" size={26} />,
			navigate: "PrivacyScreen",
		},
		{
			label: "アバウト",
			icon: <Feather name="info" size={26} />,
			navigate: "AboutScreen",
		},
		{
			label: "ヘルプ",
			icon: <Feather name="help-circle" size={26} />,
			navigate: "HelpScreen",
		},
	],
];
