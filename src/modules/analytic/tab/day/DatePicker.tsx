import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import { CustomTouchableOpacity } from "components/custom";
import moment from "moment";
import colors from "react-native-ui-lib/src/style/colors";
import { Entypo } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = () => {
	const [date, setDate] = useState(new Date());
	const [showPicker, setShowPicker] = useState(false);

	const onDateChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date;
		setShowPicker(Platform.OS === "ios");
		setDate(currentDate);
	};

	const decreaseDay = () => {
		setDate(moment(date).subtract(1, "day").toDate());
	};

	const increaseDay = () => {
		setDate(moment(date).add(1, "day").toDate());
	};

	const showDatePicker = () => {
		setShowPicker(true);
	};

	return (
		<>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: 20,
					paddingVertical: 12,
				}}
			>
				<CustomTouchableOpacity onPress={decreaseDay}>
					<Entypo
						name="chevron-thin-left"
						size={20}
						color={colors.icon}
					/>
				</CustomTouchableOpacity>

				<CustomTouchableOpacity
					onPress={showDatePicker}
					style={{
						paddingVertical: 8,
						paddingHorizontal: 22,
						borderColor: colors.icon,
						borderWidth: 0.5,
						borderRadius: 5,
						backgroundColor: colors.input,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							color: colors.text,
							letterSpacing: 1,
						}}
					>
						{moment(date).format("YYYY-MM-DD")}
					</Text>
				</CustomTouchableOpacity>

				<CustomTouchableOpacity onPress={increaseDay}>
					<Entypo
						name="chevron-thin-right"
						size={20}
						color={colors.icon}
					/>
				</CustomTouchableOpacity>
			</View>

			{showPicker && (
				<DateTimePicker
					value={date}
					mode="date"
					display="default"
					onChange={onDateChange}
				/>
			)}
		</>
	);
};

export default DatePicker;
