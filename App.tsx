import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import RootNavigation from "routes/global/RootNavigation";
import { store } from "store/configureStore";
import { darkTheme, lightTheme } from "utils/theme/theme";

const App = () => {
	const colorScheme = useColorScheme();
	return (
		<Provider store={store}>
			<NavigationContainer
				theme={colorScheme === "dark" ? darkTheme : lightTheme}
			>
				<RootNavigation></RootNavigation>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
