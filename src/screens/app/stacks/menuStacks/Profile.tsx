import { ThemedText, ThemedView } from "components/themed";
import { StatusBar } from "expo-status-bar";
import { StaticHeader } from "layouts";
import {
	ImageBackground,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from "react-native";
import { Avatar } from "react-native-ui-lib";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/customs";
import { globalConstants } from "utils/constants/constant";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { ScrollView } from "react-native-gesture-handler";
import { ContributionGraph } from "react-native-chart-kit";
import Svg from "react-native-svg";
import { Path } from "react-native-svg";

const Profile = () => {
	const { colors } = useTheme();
	const { goBack } = useNavigation<any>();
	const banner =
		"https://i.pinimg.com/564x/52/ab/92/52ab92415b6fb448365733d0ebe46221.jpg";
	const avatar =
		"https://i.pinimg.com/564x/3e/c4/07/3ec407158220f3bffbbb9e5e7ce98308.jpg";
	const { width } = useWindowDimensions();

	const styles = StyleSheet.create({
		headerBackContainer: {
			flexDirection: "row",
			gap: 6,
			alignItems: "center",
			opacity: 0.85,
		},
		headerBackText: {
			fontSize: 20,
			color: "white",
			fontWeight: "500",
		},
		avatarContainer: {
			alignItems: "center",
			marginTop: -78,
			position: "relative",
		},
		avatar: {
			width: 148,
			height: 148,
			backgroundColor: colors.background,
			borderRadius: 1000,
			alignItems: "center",
			justifyContent: "center",
		},
		editIcon: {
			position: "absolute",
			width: 30,
			height: 30,
			borderRadius: 100,
			backgroundColor: "white",
			alignItems: "center",
			justifyContent: "center",
			bottom: 6,
			right: 6,
			shadowColor: "gray",
			shadowOffset: { width: 2, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 2,
			borderWidth: 1,
			borderColor: colors.inputBackground,
		},
		displayName: {
			marginTop: 4,
			fontSize: 24,
			fontWeight: "500",
		},
		email: {
			marginTop: 4,
			fontSize: 16,
			color: colors.subText,
		},
		descContainer: {
			fontWeight: "700",
			lineHeight: 20,
			fontSize: 15,
		},
		desc: { fontWeight: "400", color: "gray" },
		join: {
			fontWeight: "700",
			lineHeight: 20,
			fontSize: 15,
		},
		joinDate: { fontWeight: "400", color: "gray" },
		progressWheelContainer: {
			marginHorizontal: "auto",
			marginBottom: 8,
			width: 180,
			height: 180,
			alignItems: "center",
			justifyContent: "center",
		},
		focusContainer: {
			width: 180,
			height: 180,
			marginHorizontal: "auto",
			marginBottom: 6,
			alignItems: "center",
			justifyContent: "center",
		},
		focusText: {
			fontSize: 30,
			fontWeight: "600",
			color: "gray",
			marginTop: 8,
		},
		contentContainer: {
			paddingTop: 16,
			paddingHorizontal: globalConstants.padding,
			gap: 12,
			marginBottom: 20,
		},
	});

	return (
		<ScrollView>
			<StatusBar style="light"></StatusBar>
			{/* banner  */}
			<ImageBackground
				source={{
					uri: banner,
				}}
				style={{ height: 260 }}
			>
				<StaticHeader background="transparent">
					<CustomTouchableOpacity
						onPress={() => goBack()}
						style={styles.headerBackContainer}
					>
						<Entypo
							name="chevron-thin-left"
							size={20}
							color="white"
						/>
						<Text style={styles.headerBackText}>プロフィール</Text>
					</CustomTouchableOpacity>
				</StaticHeader>
			</ImageBackground>

			{/* avatar & name */}
			<View style={styles.avatarContainer}>
				<ThemedView style={styles.avatar}>
					<Avatar source={{ uri: avatar }} size={140} />
					<View style={styles.editIcon}>
						<AntDesign
							name="edit"
							color={colors.subText}
							size={20}
						/>
					</View>
				</ThemedView>
				<ThemedText style={styles.displayName}>Nyamu</ThemedText>
				<ThemedText style={styles.email}>
					meowcopter@gmail.com
				</ThemedText>
			</View>

			{/* content field  */}
			<View style={styles.contentContainer}>
				{/* Desc  */}
				<ThemedText style={styles.descContainer}>
					自己紹介：
					<ThemedText style={styles.desc}>
						私はPimthaというInstagramアカウントで知られるインフルエンサーおよびデジタルクリエーターです。リラックスした自撮り、ペットの写真、旅行のコンテンツを投稿しており、フォロワーは470万人に達しています。
					</ThemedText>
				</ThemedText>

				{/* Joined  */}
				<ThemedText style={styles.join}>
					参加日：
					<ThemedText style={styles.joinDate}>2024/08/24</ThemedText>
				</ThemedText>

				{/* Analytic  */}
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<View style={{ flex: 1 }}>
						<View style={styles.progressWheelContainer}>
							<AnimatedProgressWheel
								size={160}
								width={16}
								color={"#03c03c"}
								progress={65}
								backgroundColor={colors.inputBackground}
								duration={1000}
								showProgressLabel
								rotation={"-90deg"}
								labelStyle={{
									color: "#03c03c",
									fontWeight: "600",
									fontSize: 32,
								}}
								subtitle={"完了"}
								subtitleStyle={{ fontSize: 16 }}
								showPercentageSymbol
								rounded
							/>
						</View>
						<ThemedText style={{ textAlign: "center" }}>
							タスク完了比率
						</ThemedText>
					</View>
					<View style={{ flex: 1, alignItems: "center" }}>
						<View style={styles.focusContainer}>
							<View
								style={{ alignItems: "center", marginTop: -20 }}
							>
								<Svg
									width={75}
									height={75}
									viewBox="0 0 256 256"
								>
									<Path
										fill="gray"
										d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.9 47.9 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"
									></Path>
								</Svg>
								<ThemedText style={styles.focusText}>
									22h45m
								</ThemedText>
							</View>
						</View>
						<ThemedText>集中モード時間</ThemedText>
					</View>
				</View>

				{/* Commit analytic  */}
				<View style={{ marginTop: 20 }}>
					<ContributionGraph
						values={commitsData}
						endDate={new Date("2024-07-22")}
						numDays={98}
						width={width}
						height={200}
						chartConfig={{
							backgroundColor: "white",
							backgroundGradientFrom: "white",
							backgroundGradientTo: "white",
							color: (opacity = 1) =>
								`rgba(3,192,60, ${opacity})`,
							style: {
								borderRadius: 16,
							},
							propsForLabels: {
								fontWeight: "500",
								fill: "gray",
							},
						}}
						style={{ width: width - globalConstants.padding * 2 }}
						tooltipDataAttrs={() => {}}
					/>
					<ThemedText style={{ textAlign: "center" }}>
						月別アクティビティ
					</ThemedText>
				</View>
			</View>
		</ScrollView>
	);
};

const commitsData = [
	{ date: "2024-07-02", count: 1 },
	{ date: "2024-07-03", count: 2 },
	{ date: "2024-07-04", count: 3 },
	{ date: "2024-07-05", count: 4 },
	{ date: "2024-07-06", count: 5 },
	{ date: "2024-07-30", count: 2 },
	{ date: "2024-07-31", count: 3 },
	{ date: "2024-07-01", count: 2 },
	{ date: "2024-07-02", count: 4 },
	{ date: "2024-07-05", count: 2 },
	{ date: "2024-07-30", count: 4 },
];

export default Profile;
