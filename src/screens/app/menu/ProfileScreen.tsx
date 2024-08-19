import React, { useRef } from "react";
import { ViewFull } from "components/view";
import { Header } from "components/header";
import { View, ScrollView, Animated, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
	const scrollY = useRef(new Animated.Value(0)).current;

	const bannerHeight = scrollY.interpolate({
		inputRange: [-100, 0],
		outputRange: [340, 260],
		extrapolate: "clamp",
	});

	const bannerScale = scrollY.interpolate({
		inputRange: [-100, 50],
		outputRange: [1.1, 1],
		extrapolate: "clamp",
	});

	return (
		<ViewFull>
			<Animated.Image
				source={{
					uri: "https://i.pinimg.com/564x/51/e8/8f/51e88fd0b24ae8bb6233eeacc281352f.jpg",
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
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: false }
				)}
				scrollEventThrottle={16}
			>
				{/* Nội dung của trang profile */}
				<View style={styles.content}>{/* Nội dung */}</View>
			</ScrollView>
		</ViewFull>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	banner: {
		width: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
	scrollViewContent: {
		paddingTop: 260, // Điều chỉnh giá trị này dựa trên chiều cao banner của bạn
	},
	content: {
		height: 1000, // Ví dụ về chiều cao nội dung
		backgroundColor: "white",
	},
});

export default ProfileScreen;
