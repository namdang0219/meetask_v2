import _ from "lodash";
import {
	View,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
	Keyboard,
} from "react-native";
import React, { useState } from "react";
import { CustomTouchableOpacity } from "components/customs";
import { globalConstants } from "utils/constants/constant";
import { primaryColor } from "utils/constants/ThemeColors";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import { AddTaskInput } from "components/inputs";
import { categoryMocks } from "mocks";
import {
	PickerItemProps,
	PickerSingleValue,
} from "react-native-ui-lib/src/components/picker/types";
import { Button, Icon, Picker } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";
import { useTintColor } from "hooks";

const TaskAddSheet = ({ handleFullOpen }: { handleFullOpen: () => void }) => {
	const pickerItems: PickerItemProps[] = categoryMocks.map((category) => ({
		label: category.name,
		value: category.categoryId,
	}));

	const { dismiss } = useBottomSheetModal();
	const [value, setValue] = useState<PickerSingleValue>(pickerItems[0].value);
	const { colors } = useTheme();
	const tint = useTintColor();

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
		inputFieldContainer: {
			flex: 1,
			paddingHorizontal: globalConstants.padding,
			paddingTop: 14,
			flexDirection: "column",
			gap: 20,
		},
		inputLabel: {
			fontWeight: "600",
			color: "gray",
			marginBottom: 8,
			marginLeft: 4,
		},
		inputField: {
			paddingHorizontal: 10,
			paddingVertical: 14,
			borderWidth: 1,
			borderColor: colors.border,
			borderRadius: 6,
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
				<View style={styles.inputFieldContainer}>
					{/* title input  */}
					<AddTaskInput
						handleFullOpen={handleFullOpen}
						label="タイトル"
					/>

					{/* desc input  */}
					<AddTaskInput
						handleFullOpen={handleFullOpen}
						label="説明"
					/>

					{/* category input  */}
					<View style={{ flexDirection: "row", gap: 20 }}>
						<View style={{ flex: 1 }}>
							{/* <Picker
								label="Category"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder="Pick a Category"
								useWheelPicker
								value={value}
								items={pickerItems}
							/> */}
						</View>
						<View
							style={{ backgroundColor: "cyan", flex: 1 }}
						></View>
					</View>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

export default TaskAddSheet;
