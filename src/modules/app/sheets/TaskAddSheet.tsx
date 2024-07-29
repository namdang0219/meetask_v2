import {
	View,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	Keyboard,
	useColorScheme,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import { CustomTouchableOpacity } from "components/customs";
import { useTheme } from "@react-navigation/native";
import { globalConstants } from "utils/constants/constant";
import { primaryColor } from "utils/constants/ThemeColors";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import { TextField } from "react-native-ui-lib";
import { useTintColor } from "hooks/useTintColor";
import { CustomColorType } from "utils/types";

const TaskAddSheet = ({ handleFullOpen }: { handleFullOpen: () => void }) => {
	const { dismiss } = useBottomSheetModal();
	const [title, setTitle] = useState<any>();
	const { colors } = useTheme();
	const tintColor = useTintColor();

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
		<TouchableNativeFeedback
			onPress={() => {
				if (Keyboard.isVisible()) {
					Keyboard.dismiss();
				}
			}}
			style={{ flex: 1 }}
		>
			<View style={{ flex: 1 }}>
				{/* header container  */}
				<View style={styles.headerContainer}>
					<CustomTouchableOpacity onPress={() => dismiss()}>
						<Text style={styles.headerText}>閉じる</Text>
					</CustomTouchableOpacity>
					<CustomTouchableOpacity onPress={handleSaveTask}>
						<Text style={styles.headerText}>作成</Text>
					</CustomTouchableOpacity>
				</View>

				{/* main container  */}
				<View
					style={{
						flex: 1,
						paddingHorizontal: globalConstants.padding,
						paddingTop: 14,
						flexDirection: "column",
						gap: 20,
					}}
				>
					<View>
						<Text
							style={{
								fontWeight: "600",
								color: "gray",
								marginBottom: 8,
								marginLeft: 4,
							}}
						>
							タイトル
						</Text>
						<TextInput
							style={{
								paddingHorizontal: 10,
								paddingVertical: 14,
								borderWidth: 1,
								borderColor: colors.border,
								borderRadius: 6,
							}}
							onFocus={handleFullOpen}
							placeholder="タイトル"
						/>
					</View>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

export default TaskAddSheet;
