import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import Global from "utils/constants/Global";

import DatePicker from "./day/DatePicker";
import DateWheelChart from "./day/DateWheelChart";
import DateWheelChartContent from "./day/DateWheelChartContent";
import { useTheme } from "@react-navigation/native";

export type progressDataType = {
	name: string;
	progress: number;
	color: string;
	radius: number;
};

const DayTab = () => {
	const { colors } = useTheme();

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
				<View style={{marginTop: 20}}>
					<Text style={{ fontSize: 16, color: colors.text }}>
						Thủ tướng Chính phủ vừa có Công điện số 86 về chủ động
						ứng phó bão số 3 gửi Bí thư, Chủ tịch UBND tỉnh, thành
						phố: Quảng Ninh, Hải Phòng, Thái Bình, Nam Định, Ninh
						Bình, Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình, Quảng
						Trị, Thừa Thiên Huế, Đà Nẵng, Quảng Nam, Quảng Ngãi,
						Lạng Sơn, Cao Bằng, Bắc Kạn, Thái Nguyên, Hà Giang, Lào
						Cai, Yên Bái, Tuyên Quang, Phú Thọ, Hòa Bình.
					</Text>
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
