import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import Global from "utils/constants/Global";

import DatePicker from "./day/DatePicker";
import DateWheelChart from "./day/DateWheelChart";
import DateWheelChartContent from "./day/DateWheelChartContent";

export type progressDataType = {
	name: string;
	progress: number;
	color: string;
	radius: number;
};

const DayTab = () => {
	const progressData: progressDataType[] = [
		{ name: "完成", progress: 0.7, color: "#22c55e", radius: 85 },
		{ name: "期限切れ", progress: 0.4, color: "#f97316", radius: 60 },
		{ name: "事前に削除", progress: 0.9, color: "#ef4444", radius: 35 },
	];

	return (
		<>
			<DatePicker />
			<ScrollView
				contentContainerStyle={{ paddingHorizontal: Global.padding }}
				style={{ paddingTop: 8 }}
			>
        {/* Wheel Container  */}
				<View style={styles.wheelContainer}>
					<DateWheelChart progressData={progressData} />
					<DateWheelChartContent progressData={progressData} />
				</View>
        <View>

        </View>
				<View style={{ height: 1000 }} />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	wheelContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default DayTab;
