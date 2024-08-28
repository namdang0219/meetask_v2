import React, { useCallback, useMemo, useRef } from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import { Button, StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { CustomBottomSheet } from "components/custom";

const AnalyticScreen = () => {
	return (
		<ViewInsetTop style={{flex: 1}}>
			<Header type="onlyTitle" title="Analytic"></Header>
		</ViewInsetTop>
	);
};

export default AnalyticScreen;
