import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "components/customs";
import { useTheme } from "@react-navigation/native";
import { globalConstants } from "utils/constants/constant";
import { primaryColor } from "utils/constants/ThemeColors";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";

const TaskAddSheet = () => {
	const { colors } = useTheme();
	const { dismiss } = useBottomSheetModal();

	const styles = StyleSheet.create({
		headerContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			paddingHorizontal: globalConstants.padding,
			paddingVertical: 10,
			borderBottomColor: "#f4f4f4",
			borderBottomWidth: 1,
		},
		headerText: {
			color: primaryColor,
			fontSize: 18,
		},
	});

	const handleSaveTask = () => {
		dismiss();
		Toast.show({
			text1: "保存済み!🎉",
			type: "success",
			text1Style: { fontSize: 20, fontWeight: "400" },
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.headerContainer}>
				<CustomTouchableOpacity onPress={() => dismiss()}>
					<Text style={styles.headerText}>閉じる</Text>
				</CustomTouchableOpacity>
				<CustomTouchableOpacity onPress={handleSaveTask}>
					<Text style={styles.headerText}>作成</Text>
				</CustomTouchableOpacity>
			</View>
		</View>
	);
};

export default TaskAddSheet;
