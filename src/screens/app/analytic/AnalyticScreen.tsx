import React from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import { Button } from "react-native";
import { useActionSheet } from "@expo/react-native-action-sheet";

const AnalyticScreen = () => {
	

	return (
		<ViewInsetTop style={{ flex: 1 }}>
			<Header type="onlyTitle" title="Analytic"></Header>

			
		</ViewInsetTop>
	);
};

export default AnalyticScreen;
