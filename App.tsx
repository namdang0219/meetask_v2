import './gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigation from "routes/global/RootNavigation";

const App = () => {
	return (
		<NavigationContainer>
			<RootNavigation></RootNavigation>
		</NavigationContainer>
	);
};

export default App;
