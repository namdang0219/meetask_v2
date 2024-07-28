import React, { useRef, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	ExpandableCalendar,
	AgendaList,
	CalendarProvider,
	WeekCalendar,
} from "react-native-calendars";
import AgendaItem from "screens/app/mocks/AgendaItem";
import { agendaItems, getMarkedDates } from "screens/app/mocks/agendaItems";
import { getTheme, themeColor, lightThemeColor } from "screens/app/mocks/theme";
import testIDs from "screens/app/testIDs";

// const leftArrowIcon = require('../img/previous.png');
// const rightArrowIcon = require('../img/next.png');
const ITEMS: any[] = agendaItems;

interface Props {
	weekView?: boolean;
}

const Calendar = (props: Props) => {
	const { weekView } = props;
	const marked = useRef(getMarkedDates());
	const theme = useRef(getTheme());
	const todayBtnTheme = useRef({
		todayButtonTextColor: themeColor,
	});

	// const onDateChanged = useCallback((date, updateSource) => {
	//   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
	// }, []);

	// const onMonthChange = useCallback(({dateString}) => {
	//   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
	// }, []);

	const renderItem = useCallback(({ item }: any) => {
		return <AgendaItem item={item} />;
	}, []);

	const vacation = {
		key: "vacation",
		color: "red",
		selectedDotColor: "white",
	};
	const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
	const workout = { key: "workout", color: "green" };

	return (
		<CalendarProvider
			date={ITEMS[1]?.title}
			showTodayButton
			disabledOpacity={0.6}
			theme={todayBtnTheme.current}
		>
			{weekView ? (
				<WeekCalendar
					testID={testIDs.weekCalendar.CONTAINER}
					firstDay={1}
					markedDates={marked.current}
				/>
			) : (
				<ExpandableCalendar
					testID={testIDs.expandableCalendar.CONTAINER}
					initialPosition={ExpandableCalendar.positions.CLOSED}
					calendarStyle={styles.calendar}
					theme={theme.current}
					firstDay={1}
					animateScroll
					markingType="multi-dot"
					markedDates={{
						"2024-07-27": {
							dots: [vacation, massage, workout],
							selected: true,
							// selectedColor: "red",
						},
						"2024-07-29": {
							dots: [massage, workout],
							disabled: true,
						},
					}}
				/>
			)}
			<AgendaList
				sections={ITEMS}
				renderItem={renderItem}
				sectionStyle={styles.section}
			/>
		</CalendarProvider>
	);
};

type CategoryType = {
	key: string;
	color: string;
};

const categories: CategoryType[] = [
	{ key: "Shopping", color: "#10b981" },
	{ key: "Study", color: "#38bdf8" },
	{ key: "Business", color: "#d946ef" },
	{ key: "School", color: "#fbbf24" },
];

export default Calendar;

const styles = StyleSheet.create({
	calendar: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	header: {
		backgroundColor: "lightgrey",
	},
	section: {
		backgroundColor: lightThemeColor,
		color: "grey",
		textTransform: "capitalize",
	},
});
