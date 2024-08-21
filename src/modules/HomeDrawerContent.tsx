import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import Global from "utils/constants/Global";
import { CustomTouchableOpacity } from "components/custom";
import { categoryMocks } from "mock/categoryMocks";
import { categoryIcons } from "data/categoryIcons";

const HomeDrawerContent = ({ navigation }: { navigation: any }) => {
	const layout = useWindowDimensions();

	const PersonalTab = () => {
		const [activeCategory, setActiveCategory] = useState<string>("Work");

		const handleChangeCategory = (categoryName: string) => {
			console.log(categoryName);
			setActiveCategory(categoryName);
			navigation.navigate(categoryName);
		};

		return (
			<ScrollView>
				{/* <CustomTouchableOpacity
					onPress={() => navigation.navigate("HomeScreen")}
					style={{
						backgroundColor: "black",
						paddingHorizontal: Global.padding,
						height: 50,
						borderRadius: 10,
						flexDirection: "row",
						gap: 12,
						alignItems: "center",
					}}
				>
					<Ionicons
						name="home-outline"
						size={Global.categoryIcon.size}
						color={Global.categoryIcon.color}
					/>
					<Text
						style={{
							fontSize: 16,
							color: "white",
							fontWeight: "500",
						}}
					>
						Home
					</Text>
				</CustomTouchableOpacity> */}
				{categoryMocks &&
					categoryMocks.map((category) => (
						<CustomTouchableOpacity
							key={category.cid}
							onPress={() => handleChangeCategory(category.name)}
							style={{
								backgroundColor:
									activeCategory == category.name
										? Global.colors.light.primary
										: "white",
								paddingHorizontal: Global.padding,
								height: 50,
								borderRadius: 10,
								flexDirection: "row",
								gap: 12,
								alignItems: "center",
							}}
						>
							<View>
								{
									categoryIcons.find(
										(i) => i.iid === category.icon
									)?.icon
								}
							</View>
							<Text
								style={{
									fontSize: 16,
									color:
										activeCategory == category.name
											? "white"
											: Global.colors.light.gray,
									fontWeight: "500",
								}}
							>
								{category.name}
							</Text>
						</CustomTouchableOpacity>
					))}
			</ScrollView>
		);
	};

	const GroupTab = () => (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text style={{ fontSize: 18, color: "gray" }}>開発中</Text>
		</View>
	);

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "first", title: "個人" },
		{ key: "second", title: "グループ" },
	]);

	return (
		<View style={styles.container}>
			{/* logo container  */}
			<View style={styles.logoContainer}>
				<Image
					source={require("./../../assets/icon.png")}
					style={styles.logoImage}
				/>
				<View
					style={{
						flexDirection: "row",
						alignItems: "baseline",
						gap: 10,
					}}
				>
					<Text style={styles.logoText}>MeeTask</Text>
					<Text style={{ color: "gray", fontSize: 12 }}>
						verion 1.00
					</Text>
				</View>
			</View>

			{/* tab view  */}
			<TabView
				navigationState={{ index, routes }}
				renderScene={SceneMap({
					first: PersonalTab,
					second: GroupTab,
				})}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
				renderTabBar={({ jumpTo, navigationState }) => (
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							gap: 20,
							marginBottom: 18,
							marginTop: 8,
						}}
					>
						{routes.map((route) => (
							<CustomTouchableOpacity
								key={route.key}
								onPress={() => jumpTo(route.key)}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: "600",
										color:
											navigationState.routes[index]
												.key === route.key
												? Global.colors.light.primary
												: Global.colors.light.gray,
									}}
								>
									{route.title}
								</Text>
							</CustomTouchableOpacity>
						))}
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 12,
	},
	logoContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	logoImage: {
		width: 40,
		height: 40,
	},
	logoText: {
		fontSize: 24,
		fontWeight: "500",
		color: "#333",
		lineHeight: 26,
	},
	pagerView: {
		flex: 1,
	},
});

export default HomeDrawerContent;
