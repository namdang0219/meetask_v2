import React, { useCallback, useMemo, useRef } from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { CustomBottomSheet } from "components/custom";
import { DateTimePicker } from "react-native-ui-lib";

const AnalyticScreen = () => {
	return (
		<ViewInsetTop style={{flex: 1}}>
			<Header type="onlyTitle" title="Analytic"></Header>

			<View>
			<DateTimePicker  placeholder={'Placeholder'} mode={'time'}/>
			</View>
		</ViewInsetTop>
	);
};

export default AnalyticScreen;
