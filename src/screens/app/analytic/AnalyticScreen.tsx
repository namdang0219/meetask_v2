import React, { useRef } from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import { Button, Text, View } from "react-native";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";

const AnalyticScreen = () => {
	const sheetRef = useRef<BottomSheetMethods>(null);
	return (
		<ViewInsetTop>
			<Header type="onlyTitle" title="Analytic"></Header>
			<View style={{flex: 1}}>
				<Button title="Open" onPress={() => sheetRef.current?.open()} />
				<BottomSheet ref={sheetRef}>
					<Text>
						The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your
						app craves 🚀
					</Text>
				</BottomSheet>
			</View>
		</ViewInsetTop>
	);
};

export default AnalyticScreen;
