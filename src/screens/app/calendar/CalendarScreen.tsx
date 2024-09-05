import React from "react";
import { ViewInsetTop } from "components/view";
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const CalendarScreen = () => {
	const { colors } = useTheme();

	return (
		<ViewInsetTop>
			<Text style={{ color: colors.text }}>Calendar</Text>
		</ViewInsetTop>
	);
};

export default CalendarScreen;
