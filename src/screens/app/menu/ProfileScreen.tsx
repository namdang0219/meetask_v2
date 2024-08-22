import React, { useRef, useState } from "react";
import { ViewFull } from "components/view";
import { Header } from "components/header";
import {
	View,
	ScrollView,
	Animated,
	StyleSheet,
	Image,
	StatusBar,
	Platform,
	Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Global from "utils/constants/Global";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { useTheme } from "@react-navigation/native";

const ProfileScreen = () => {
	const user = useSelector((state: RootState) => state.user);
	const scrollY = useRef(new Animated.Value(0)).current;
	const [scrollFromTop, setScrollFromTop] = useState<number>(1);
	const { top } = useSafeAreaInsets();
	const { colors } = useTheme();

	const bannerHeight = scrollY.interpolate({
		inputRange: [-100, 0],
		outputRange: [340, 260],
		extrapolate: "clamp",
	});

	const bannerScale = scrollY.interpolate({
		inputRange: [-100, 0],
		outputRange: [1.2, 1],
		extrapolate: "clamp",
	});

	const handleScroll = Animated.event(
		[{ nativeEvent: { contentOffset: { y: scrollY } } }],
		{
			useNativeDriver: false,
			listener: (event: any) => {
				const yOffset = event.nativeEvent.contentOffset.y;
				setScrollFromTop(yOffset);
			},
		}
	);

	const handleHeaderOpacity = () => {
		if (scrollFromTop == 0) {
			return 1;
		} else if (scrollFromTop > 0 && scrollFromTop < 100) {
			return (100 - scrollFromTop) / 100;
		} else if (scrollFromTop >= 100) {
			return 0;
		} else {
			return 1;
		}
	};

	return (
		<ViewFull>
			<StatusBar
				barStyle={
					scrollFromTop > 240
						? Platform.OS === "ios"
							? "dark-content"
							: "light-content"
						: "light-content"
				}
			/>
			<Header
				type="titleWithBack"
				title="プロフィール"
				containerStyle={{
					position: "absolute",
					top: top,
					left: 0,
					right: 0,
					zIndex: 10,
					opacity: handleHeaderOpacity(),
				}}
				titleStyle={{ color: "white" }}
				backButtonColor="white"
			/>
			<Animated.Image
				source={{
					uri: "https://i.pinimg.com/736x/b8/20/64/b8206411a79d0f8fbcc69dc07c67498e.jpg",
				}}
				style={[
					styles.banner,
					{
						height: bannerHeight,
						transform: [{ scale: bannerScale }],
					},
				]}
				resizeMode="cover"
			/>
			<ScrollView
				contentContainerStyle={styles.scrollViewContent}
				onScroll={handleScroll}
				scrollEventThrottle={16}
			>
				{/* content  */}
				<View style={styles.content}>
					{/* avatar  */}
					<View
						style={{
							backgroundColor: "white",
							width: 150,
							height: 150,
							borderRadius: 1000,
							marginHorizontal: "auto",
							marginTop: -80,
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
						}}
					>
						<Image
							source={{
								uri: user.photoUrl,
							}}
							style={{
								width: 140,
								height: 140,
								borderRadius: 1000,
							}}
						/>
						<View
							style={{
								backgroundColor: "white",
								width: 40,
								height: 40,
								borderRadius: 1000,
								position: "absolute",
								bottom: 0,
								right: 10,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Feather name="edit" size={20} color="black" />
						</View>
					</View>

					{/* name and email  */}
					<View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "500",
								textAlign: "center",
								marginTop: 6,
							}}
						>
							{user.displayName}
						</Text>
						<Text
							style={{
								textAlign: "center",
								marginTop: 2,
								color: colors.icon,
							}}
						>
							{user.email}
						</Text>
					</View>

					{/* introduction  */}
					<View style={{ marginTop: 12, gap: 18 }}>
						<Text
							style={{
								lineHeight: 22,
								fontSize: 16,
								color: "gray",
							}}
						>
							<Text style={{ fontWeight: "600", color: "black" }}>
								自己紹介：
							</Text>
							{user.introduce}
						</Text>

						<Text
							style={{
								lineHeight: 22,
								fontSize: 16,
								color: "gray",
							}}
						>
							<Text style={{ fontWeight: "600", color: "black" }}>
								参加日：
							</Text>
							{user.join}
						</Text>
					</View>
				</View>
			</ScrollView>
		</ViewFull>
	);
};

const styles = StyleSheet.create({
	banner: {
		width: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
	scrollViewContent: {
		paddingTop: 260,
	},
	content: {
		minHeight: 1000,
		backgroundColor: "white",
		paddingHorizontal: Global.padding,
	},
});

export default ProfileScreen;
