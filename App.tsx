import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "routes/global/RootNavigation";
import { store } from "store/configureStore";
import { darkTheme, lightTheme } from "utils/theme/themeColors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
	const colorScheme = useColorScheme();
	LogBox.ignoreLogs([
		"Warning: IGNORE: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
		"Warning: MeasureElement: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
	]);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<ActionSheetProvider>
					<Provider store={store}>
						<NavigationContainer
							theme={
								colorScheme === "dark" ? darkTheme : lightTheme
							}
						>
							<ApplicationProvider {...eva} theme={eva.light}>
								<RootNavigation></RootNavigation>
								<Toasts
									overrideDarkMode={true}
									defaultStyle={{ text: { fontSize: 16 } }}
								/>
							</ApplicationProvider>
						</NavigationContainer>
					</Provider>
				</ActionSheetProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default App;
