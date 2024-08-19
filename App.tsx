import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import RootNavigation from "routes/global/RootNavigation";
import { store } from "store/configureStore";

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootNavigation></RootNavigation>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
