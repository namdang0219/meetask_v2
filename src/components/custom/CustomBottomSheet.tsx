import { View, Text, Button, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";
import { ViewFull } from "components/view";

export type BottomSheetRef = BottomSheetModal;

interface Props {
	children: React.ReactNode;
}

const CustomBottomSheet = forwardRef<BottomSheetRef, Props>((props, ref) => {
	const { colors } = useTheme();
	const { children } = props;
	const snapPoints = useMemo(() => ["60%", "92%"], []);

	// const handleClosePress = () => {
	// 	if (ref) {
	// 		ref.current?.close();
	// 	}
	// };
	// const handleOpenPress = () => ref.current?.expand();
	// const handleCollapsePress = () => ref.current?.collapse();
	// const snapeToIndex = (index: number) => ref.current?.snapToIndex(index);
	const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop
				appearsOnIndex={0}
				disappearsOnIndex={-1}
				{...props}
			/>
		),
		[]
	);
	return (
		<>
			<BottomSheet
				ref={ref}
				index={0}
				snapPoints={snapPoints}
				enablePanDownToClose={true}
				handleIndicatorStyle={{ backgroundColor: colors.icon }}
				// backgroundStyle={{ backgroundColor: "#1d0f4e" }}
				backdropComponent={renderBackdrop}
			>
				{children}
			</BottomSheet>
		</>
	);
});

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
	},
});

export default CustomBottomSheet;
