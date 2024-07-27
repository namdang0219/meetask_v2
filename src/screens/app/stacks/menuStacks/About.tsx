import {
	View,
	Text,
	Image,
	useWindowDimensions,
	StyleSheet,
	Share,
} from "react-native";
import React from "react";
import { globalConstants } from "utils/constants/constant";
import { useTheme } from "@react-navigation/native";
import Svg, {
	Path,
	Rect,
	RadialGradient,
	G,
	Stop,
	Defs,
} from "react-native-svg";
import { CustomTouchableOpacity } from "components/customs";
import { Button } from "components/buttons";

const About = () => {
	const { colors } = useTheme();
	const aboutImg = "../../../../../assets/images/about.png";
	const { width } = useWindowDimensions();

	const icons = [
		{
			name: "facebook",
			icon: (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={28}
					height={28}
					viewBox="0 0 256 256"
				>
					<Path
						fill="#1877f2"
						d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
					></Path>
					<Path
						fill="#fff"
						d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
					></Path>
				</Svg>
			),
		},
		{
			name: "instagram",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 256 256">
					<G fill="none">
						<Rect
							width={256}
							height={256}
							fill="url(#skillIconsInstagram0)"
							rx={60}
						></Rect>
						<Rect
							width={256}
							height={256}
							fill="url(#skillIconsInstagram1)"
							rx={60}
						></Rect>
						<Path
							fill="#fff"
							d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
						></Path>
						<Defs>
							<RadialGradient
								id="skillIconsInstagram0"
								cx={0}
								cy={0}
								r={1}
								gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
								gradientUnits="userSpaceOnUse"
							>
								<Stop stopColor="#fd5"></Stop>
								<Stop offset={0.1} stopColor="#fd5"></Stop>
								<Stop offset={0.5} stopColor="#ff543e"></Stop>
								<Stop offset={1} stopColor="#c837ab"></Stop>
							</RadialGradient>
							<RadialGradient
								id="skillIconsInstagram1"
								cx={0}
								cy={0}
								r={1}
								gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
								gradientUnits="userSpaceOnUse"
							>
								<Stop stopColor="#3771c8"></Stop>
								<Stop offset={0.128} stopColor="#3771c8"></Stop>
								<Stop
									offset={1}
									stopColor="#60f"
									stopOpacity={0}
								></Stop>
							</RadialGradient>
						</Defs>
					</G>
				</Svg>
			),
		},
		{
			name: "x",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 24 24">
					<G fill="none" fillRule="evenodd">
						<Path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></Path>
						<Path
							fill={colors.text}
							d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z"
						></Path>
					</G>
				</Svg>
			),
		},
	];

	const styles = StyleSheet.create({
		container: {
			paddingHorizontal: globalConstants.padding,
			paddingTop: 8,
		},
		content: { fontSize: 16, lineHeight: 28 },
		contentHighlight: { color: colors.primary, fontWeight: "500" },
		image: {
			width: (width / 3) * 2,
			height: (width / 3) * 2,
			marginHorizontal: "auto",
		},
		extend: { fontSize: 16, textAlign: "center", marginBottom: 18 },
		socialContainer: {
			flexDirection: "row",
			justifyContent: "center",
			gap: 20,
			alignItems: "center",
			marginBottom: 30,
		},
		shareBtn: { width: 155, height: 46, marginHorizontal: "auto" },
		shareBtnContent: { fontSize: 16, fontWeight: "500" },
	});

	const onShare = async () => {
		try {
			const result = await Share.share({
				message: "友達と楽しもう！",
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					console.log(
						"Shared with activity type:",
						result.activityType
					);
				} else {
					console.log("Shared successfully");
				}
			} else if (result.action === Share.dismissedAction) {
				console.log("Share dismissed");
			}
		} catch (error: any) {
			console.error(error.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.content}>
				This app was developed by{" "}
				<Text style={styles.contentHighlight}>MeeNetwork, LTD</Text>
			</Text>
			<Text style={styles.content}>
				With the mission of bringing simple and{" "}
				<Text style={styles.contentHighlight}>
					wonderful experiences
				</Text>{" "}
				in personal task management, we would like to introduce MeeTask
				- a great application that helps solve the difficulties of
				personal task management. The kernel works cross-platform on iOS
				and Android devices
			</Text>
			<Image source={require(aboutImg)} style={styles.image}></Image>
			<Text style={styles.extend}>Also follow Mee team on:</Text>
			<View style={styles.socialContainer}>
				{icons.map((icon) => (
					<CustomTouchableOpacity key={icon.name}>
						{icon.icon}
					</CustomTouchableOpacity>
				))}
			</View>
			<Button style={styles.shareBtn} textStyle={styles.shareBtnContent} onPress={onShare}>
				Share your friend
			</Button>
		</View>
	);
};

export default About;
