import { View, Text } from "react-native";
import React, { ReactNode, useState } from "react";
import { progressDataType } from "../DayTab";
import { CustomTouchableOpacity } from "components/custom";
import { Hint } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";

const DateWheelChartContent = ({
	progressData,
}: {
	progressData: progressDataType[];
}) => {
	return (
		<View style={{ gap: 15 }}>
			{progressData.map((item, index) => (
				<CustomTouchableOpacity
					key={index}
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}
				>
					<View
						style={{
							width: 22,
							height: 12,
							backgroundColor: item.color,
							marginTop: 4,
							borderRadius: 2,
						}}
					/>
					<Text style={{ fontSize: 16, fontWeight: "500" }}>
						{item.progress * 100}% <Text>{item.name}</Text>
					</Text>
				</CustomTouchableOpacity>
			))}
		</View>
	);
};

export default DateWheelChartContent;
