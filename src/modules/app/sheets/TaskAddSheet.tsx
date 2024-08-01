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
import { Button, DateTimePicker, Icon, Picker } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";
import { useTintColor } from "hooks";

const TaskAddSheet = ({ handleFullOpen }: { handleFullOpen: () => void }) => {
	const pickerItems: PickerItemProps[] = categoryMocks.map((category) => ({
		label: category.name,
		value: category.categoryId,
		color: category.color,
	}));

	const taskTypes = [
		{ label: "Task", value: "Task" },
		{ label: "Event", value: "Event" },
	];

	const { dismiss } = useBottomSheetModal();
	const [category, setCategory] = useState(pickerItems[0]);
	const [type, setType] = useState(taskTypes[0]);
	const { colors } = useTheme();

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
					<View
						style={{
							flexDirection: "row",
							gap: globalConstants.padding,
						}}
					>
						<View style={{ flex: 1, position: "relative" }}>
							<View
								style={{
									position: "absolute",
									top: 6,
									right: 10,
									width: 20,
									height: 12,
									borderRadius: 10,
									backgroundColor: "pink",
								}}
							></View>
							<Picker
								label="Category"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder="Pick a Category"
								onChange={(item) => {
									setCategory(item as any);
									console.log(item);
								}}
								useWheelPicker
								value={category.value}
								items={pickerItems}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<Picker
								label="Type"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder="Pick a type"
								onChange={(item) => {
									setCategory(item as any);
									console.log(item);
								}}
								useWheelPicker
								value={type.value}
								items={taskTypes}
							/>
						</View>
					</View>

					{/* start date time picker  */}
					<View
						style={{
							flexDirection: "row",
							gap: globalConstants.padding,
						}}
					>
						{/* Start time  */}
						<View style={{ flex: 1 }}>
							<DateTimePicker
								label="Start Date"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder={"Start Date"}
								mode={"date"}
							/>
						</View>

						{/* end time  */}
						<View style={{ flex: 1 }}>
							<DateTimePicker
								label="Start Time"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder={"Start Time"}
								mode={"time"}
							/>
						</View>
					</View>

					{/* end date time picker  */}
					<View
						style={{
							flexDirection: "row",
							gap: globalConstants.padding,
						}}
					>
						{/* Start time  */}
						<View style={{ flex: 1 }}>
							<DateTimePicker
								label="Start Date"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder={"Start Date"}
								mode={"date"}
							/>
						</View>

						{/* end time  */}
						<View style={{ flex: 1 }}>
							<DateTimePicker
								label="Start Time"
								labelStyle={styles.inputLabel}
								fieldStyle={styles.inputField}
								placeholder={"Start Time"}
								mode={"time"}
							/>
						</View>
					</View>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

export default TaskAddSheet;
