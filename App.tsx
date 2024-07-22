import './gesture-handler';
import React from "react";
import RootNavigation from "routes/global/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { CustomDarkTheme, CustomLightTheme } from "utils/constants/ThemeColors";
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";

const App = () => {
	const scheme = useColorScheme();

	return (
		<>
			<StatusBar style={scheme === "dark" ? "light" : "dark"} />
			<GestureHandlerRootView>
				<NavigationContainer
					theme={
						scheme === "dark" ? CustomDarkTheme : CustomLightTheme
					}
				>
					<RootNavigation></RootNavigation>
				</NavigationContainer>
			</GestureHandlerRootView>
		</>
	);
};

export default App;
