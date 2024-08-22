import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CategoryScreen, HomeScreen } from "screens/app/home";
import { categoryMocks } from "mock/categoryMocks";
import HomeDrawerContent from "modules/homeDrawerContent/HomeDrawerContent";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Global from "utils/constants/Global";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { Ionicons } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/custom";
import { DrawerActions, useTheme } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
	const { photoUrl, displayName } = useSelector(
		(state: RootState) => state.user
	);
	const { top } = useSafeAreaInsets();
	const { colors } = useTheme();

	return (
		<Drawer.Navigator
			initialRouteName="HomeScreen"
			drawerContent={() => <HomeDrawerContent></HomeDrawerContent>}
			screenOptions={({}) => ({
				header: ({ navigation }) => (
					<View
						style={{
							height: 50,
							paddingTop: top,
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
								<Ionicons name="menu-outline" size={36} />
							</CustomTouchableOpacity>
							<Text
								style={{
									fontSize: 24,
									fontWeight: "500",
									flex: 1,
									marginTop: -2,
								}}
								numberOfLines={1}
							>
								Good Morning,{" "}
								<Text style={{ color: colors.primary }}>
									{displayName}
								</Text>
							</Text>
						</View>
						<Image
							source={{ uri: photoUrl }}
							style={{
								width: 38,
								height: 38,
								borderRadius: 1000,
							}}
						/>
					</View>
				),
			})}
		>
			<Drawer.Screen name="HomeScreen" component={HomeScreen} />
			{categoryMocks.map((category) => (
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
