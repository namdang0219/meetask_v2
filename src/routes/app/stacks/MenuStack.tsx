import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderText from "components/headers/HeaderText";
import Menu from "screens/app/stacks/menuStacks/Menu";
import Profile from "screens/app/stacks/menuStacks/Profile";
import { StaticHeader, FullView } from "layouts";
import { ThemedText } from "components/themed";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/customs";
import About from "screens/app/stacks/menuStacks/About";
import Help from "screens/app/stacks/menuStacks/Help";
import Language from "screens/app/stacks/menuStacks/Language";
import Privacy from "screens/app/stacks/menuStacks/Privacy";
import Setting from "screens/app/stacks/menuStacks/Setting";
import Notification from "screens/app/stacks/menuStacks/Notification";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();
	return (
		<Stack.Navigator
			screenOptions={({ route }) => ({
				headerShown: true,
				headerBackTitleStyle: {
					fontSize: 18,
				},
				headerBackTitle: route.name,
				headerTitle: '',
				headerShadowVisible: false
			})}
		>
			<Stack.Screen
				options={{
					header: () => (
						<StaticHeader>
							<ThemedText
								style={{
									fontWeight: "600",
									fontSize: 24,
									color: "black",
								}}
							>
								Menu
							</ThemedText>
							<CustomTouchableOpacity onPress={() => navigate('WalkThrough')}>
								<View
									style={{
										flexDirection: "row",
										gap: 8,
										alignItems: "center",
									}}
								>
									<Text
										style={{
											color: colors.primary,
										}}
									>
										Sign Out
									</Text>
									<SimpleLineIcons
										name="logout"
										size={20}
										color={colors.primary}
									/>
								</View>
							</CustomTouchableOpacity>
						</StaticHeader>
					),
				}}
				name="Menu"
				component={Menu}
			/>
			<Stack.Screen name="Notification" component={Notification} />
			<Stack.Screen name="Language" component={Language} />
			<Stack.Screen name="Setting" component={Setting} />
			<Stack.Screen name="About" component={About} />
			<Stack.Screen name="Privacy" component={Privacy} />
			<Stack.Screen name="Help" component={Help} />
			<Stack.Screen
				options={{ headerShown: false }}
				name="Profile"
				component={Profile}
			/>
		</Stack.Navigator>
	);
};

export default MenuStack;
