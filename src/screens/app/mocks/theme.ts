import { useTintColor } from 'hooks';
import {Platform} from 'react-native';
import { primaryColor } from 'utils/constants/ThemeColors';

export const themeColor = '#9A8DFF';
export const lightThemeColor = '#f2f7f7';

export function getTheme() {
  const disabledColor = 'grey';
  // const tint = useTintColor()

  return {
    // arrows
    arrowColor: 'black',
    arrowStyle: {padding: 0},
    // knob
    expandableKnobColor: "#cbd5e1",
    // month
    monthTextColor: 'black',
    textMonthFontSize: 18,
    // textMonthFontFamily: 'HelveticaNeue',
    textMonthFontWeight: 'semibold' as const,
    // day names
    textSectionTitleColor: 'black',
    textDayHeaderFontSize: 12,
    // textDayHeaderFontFamily: 'HelveticaNeue',
    textDayHeaderFontWeight: 'normal' as const,
    // dates
    dayTextColor: themeColor,
    todayTextColor: '#f43f5e',
    textDayFontSize: 18,
    // textDayFontFamily: 'HelveticaNeue',
    textDayFontWeight: '400' as const,
    textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
    // selected date
    selectedDayBackgroundColor: '#7c3aed',
    selectedDayTextColor: 'white',
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: 'white',
    disabledDotColor: disabledColor,
    dotStyle: {marginTop: 0}
  };
}
