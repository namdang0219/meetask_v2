import React, { forwardRef, useCallback, useEffect, useMemo } from "react";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";

export type BottomSheetRef = BottomSheetModal;

interface Props {
	children: React.ReactNode;
}

const CustomBottomSheet = forwardRef<BottomSheetRef, Props>((props, ref) => {
	const { colors } = useTheme();
	const { children } = props;
	const snapPoints = useMemo(() => ["50%", "92%"], []);

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
				index={-1}
				snapPoints={snapPoints}
				enablePanDownToClose={true}
				handleIndicatorStyle={{ backgroundColor: colors.icon }}
				backdropComponent={renderBackdrop}
				enableContentPanningGesture={false}
				backgroundStyle={{ backgroundColor: colors.background }}
			>
				{children}
			</BottomSheet>
		</>
	);
});

export default CustomBottomSheet;
