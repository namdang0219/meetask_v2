import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoryScreen, HomeScreen } from "screens/app/home";
import HomeDrawerContent from "modules/homeDrawerContent/HomeDrawerContent";
import { Image, Text, View } from "react-native";
import Global from "utils/constants/Global";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { Ionicons } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/custom";
import { DrawerActions, useTheme } from "@react-navigation/native";
import { ViewInsetTop } from "components/view";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
	const { photoUrl, displayName } = useSelector(
		(state: RootState) => state.user
	);
	const { colors } = useTheme();
	const categories = useSelector((state: RootState) => state.category);

	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			drawerContent={() => <HomeDrawerContent></HomeDrawerContent>}
			screenOptions={({}) => ({
				header: ({ navigation }) => (
					<ViewInsetTop>
						<View
							style={{
								height: 50,
								paddingHorizontal: Global.padding,
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								gap: 10,
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 10,
									flex: 1,
								}}
							>
								<CustomTouchableOpacity
									onPress={() =>
										navigation.dispatch(
											DrawerActions.toggleDrawer()
										)
									}
								>
									<Ionicons
										name="menu-outline"
										size={36}
										color={colors.text}
									/>
								</CustomTouchableOpacity>
								<Text
									style={{
										fontSize: 24,
										fontWeight: "500",
										flex: 1,
										marginTop: -2,
										color: colors.text,
									}}
									numberOfLines={1}
								>
									Good Morning,{" "}
									<Text style={{ color: colors.primary }}>
										{displayName}
									</Text>
								</Text>
							</View>
							<CustomTouchableOpacity
								onPress={() =>
									navigation.navigate("ProfileScreen")
								}
							>
								<Image
									source={{ uri: photoUrl }}
									style={{
										width: 38,
										height: 38,
										borderRadius: 1000,
									}}
								/>
							</CustomTouchableOpacity>
						</View>
					</ViewInsetTop>
				),
				drawerType: "front",
			})}
		>
			<Drawer.Screen name="HomeScreen" component={HomeScreen} />
			{categories.map((category) => (
				<Drawer.Screen
					key={category.cid}
					name={category.name}
					component={CategoryScreen}
					initialParams={{ category: category.name }}
				/>
			))}
		</Drawer.Navigator>
	);
};

export default HomeDrawer;
