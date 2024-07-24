import React, { useRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import {
	ExpandableCalendar,
	AgendaList,
	CalendarProvider,
	WeekCalendar,
} from "react-native-calendars";
import testIDs from "../../testIDs";
import { agendaItems, getMarkedDates } from "../../mocks/agendaItems";
import { getTheme, lightThemeColor, themeColor } from "../../mocks/theme";
import AgendaItem from "../../mocks/AgendaItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// const leftArrowIcon = require("../img/previous.png");
// const rightArrowIcon = require("../img/next.png");
const ITEMS: any[] = agendaItems;

interface Props {
	weekView?: boolean;
}

const Calendar = (props: Props) => {
	const {top} = useSafeAreaInsets()
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

	return (
		<>
			<CalendarProvider
			// style={{paddingTop: top, backgroundColor: "white"}}
				date={ITEMS[1]?.title}
				// onDateChanged={onDateChanged}
				// onMonthChange={onMonthChange}
				showTodayButton
				// disabledOpacity={0.6}
				theme={todayBtnTheme.current}
				// todayBottomMargin={16}
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
						// horizontal={false}
						// hideArrows
						// disablePan
						// hideKnob
						// initialPosition={ExpandableCalendar.positions.OPEN}
						calendarStyle={styles.calendar}
						// headerStyle={styles.header} // for horizontal only
						// disableWeekScroll
						theme={theme.current}
						// disableAllTouchEventsForDisabledDays
						firstDay={1}
						markedDates={marked.current}
						// leftArrowImageSource={leftArrowIcon}
						// rightArrowImageSource={rightArrowIcon}
						// animateScroll
						// closeOnDayPress={false}
					/>
				)}
				<AgendaList
					sections={ITEMS}
					renderItem={renderItem}
					// scrollToNextEvent
					sectionStyle={styles.section}
					// dayFormat={'yyyy-MM-d'}
				/>
			</CalendarProvider>
		</>
	);
};

export default Calendar;

const styles = StyleSheet.create({
	calendar: {
		paddingLeft: 20,
		paddingRight: 20,
		
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
