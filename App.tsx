import React from "react";
import RootNavigation from "routes/global/RootNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { CustomDarkTheme, CustomLightTheme } from "utils/constants/ThemeColors";
import { LogBox, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { logMessage } from "utils/ignores/LogBoxMessage";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";

const App = () => {
	const scheme = useColorScheme();
	LogBox.ignoreLogs(logMessage);

	return (
		<>
			<StatusBar style={scheme === "dark" ? "light" : "dark"} />
			<SafeAreaProvider>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<BottomSheetModalProvider>
						<NavigationContainer
							theme={
								scheme === "dark"
									? CustomDarkTheme
									: CustomLightTheme
							}
						>
							<RootNavigation></RootNavigation>
						</NavigationContainer>
					</BottomSheetModalProvider>
				</GestureHandlerRootView>
			</SafeAreaProvider>
		</>
	);
};

export default App;
