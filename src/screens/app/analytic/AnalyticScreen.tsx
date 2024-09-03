import React, { useState } from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import { ScrollView, useWindowDimensions } from "react-native";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { useTheme } from "@react-navigation/native";
import Global from "utils/constants/Global";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import DayTab from "modules/analytic/tab/DayTab";
import WeekTab from "modules/analytic/tab/WeekTab";
import MonthTab from "modules/analytic/tab/MonthTab";

const AnalyticScreen = () => {
	const { colors } = useTheme();
	const [index, setIndex] = useState(0);

	const [routes] = useState([
		{ key: "day", title: "日" },
		{ key: "week", title: "週" },
		{ key: "month", title: "月" },
	]);

	const sceneMap = SceneMap({
		day: DayTab,
		week: WeekTab,
		month: MonthTab,
	});

	return (
		<ViewInsetTop style={{ flex: 1 }}>
			<Header type="onlyTitle" title="Analytic"></Header>
			<TabView
				navigationState={{ index, routes }}
				renderScene={sceneMap}
				onIndexChange={setIndex}
				swipeEnabled={true}
				renderTabBar={(props) => (
					<TabBar
						style={{
							backgroundColor: colors.background,
							// elevation: 0,
						}}
						pressColor={colors.background}
						labelStyle={{
							color: colors.text,
							fontWeight: "500",
							fontSize: 16,
						}}
						indicatorStyle={{ backgroundColor: colors.primary }}
						{...props}
					/>
				)}
			/>
		</ViewInsetTop>
	);
};

export default AnalyticScreen;
