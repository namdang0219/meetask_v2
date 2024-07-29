import { View, StyleSheet, Text } from "react-native";
import React, { forwardRef, ReactNode, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
export type Ref = BottomSheetModal;

interface CustomBottomSheetModalProps {
	children: ReactNode;
}

const CustomBottomSheetModal = forwardRef<Ref, CustomBottomSheetModalProps>(
	({ children }, ref) => {
		const snapPoints = useMemo(() => ["50%", "86%"], []);

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
				<BottomSheetModal
					ref={ref}
					index={0}
					snapPoints={snapPoints}
					backdropComponent={renderBackdrop}
					keyboardBehavior="interactive"
				>
					<View style={{flex: 1}}>
						{children}
					</View>
				</BottomSheetModal>
			</>
		);
	}
);

export default CustomBottomSheetModal;
