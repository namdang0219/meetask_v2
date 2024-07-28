import { View, StyleSheet, Text } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
export type Ref = BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
	const snapPoints = useMemo(() => ["50%", "80%"], []);

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
		<View>
			<BottomSheetModal
				ref={ref}
				index={0}
				snapPoints={snapPoints}
				backdropComponent={renderBackdrop}
			>
				<View style={styles.contentContainer}>
					<Text style={styles.containerHeadline}>
						Bottom Modal 😎
					</Text>
				</View>
			</BottomSheetModal>
		</View>
	);
});

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		alignItems: "center",
	},
	containerHeadline: {
		fontSize: 24,
		fontWeight: "600",
		padding: 20,
	},
});

export default CustomBottomSheetModal;
