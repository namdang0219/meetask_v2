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
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const App = () => {
	const colorScheme = useColorScheme();
	LogBox.ignoreLogs([
		"Warning: IGNORE: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
		"Warning: MeasureElement: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",
	]);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ActionSheetProvider>
				<Provider store={store}>
					<NavigationContainer
						theme={colorScheme === "dark" ? darkTheme : lightTheme}
					>
						<ApplicationProvider {...eva} theme={eva.light}>
							<RootNavigation></RootNavigation>
						</ApplicationProvider>
					</NavigationContainer>
				</Provider>
			</ActionSheetProvider>
		</GestureHandlerRootView>
	);
};

export default App;
