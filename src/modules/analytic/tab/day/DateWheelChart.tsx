import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import { progressDataType } from "../DayTab";
import { useTheme } from "@react-navigation/native";

const DateWheelChart = ({
	progressData,
}: {
	progressData: progressDataType[];
}) => {
	const { colors } = useTheme();
	const AnimatedCircle = Animated.createAnimatedComponent(Circle);

	const animatedValues = progressData.map(
		() => useRef(new Animated.Value(0)).current
	);

	useEffect(() => {
		const animations = animatedValues.map((animatedValue, index) =>
			Animated.timing(animatedValue, {
				toValue: progressData[index].progress,
				duration: 1000,
				useNativeDriver: false,
			})
		);
		Animated.stagger(300, animations).start();
	}, []);

	return (
		<View>
			<Svg height="200" width="200">
				{progressData.map((item, index) => {
					const circumference = 2 * Math.PI * item.radius;
					return (
						<React.Fragment key={index}>
							{/* Gray circle */}
							<Circle
								cx="100"
								cy="100"
								r={item.radius}
								stroke={colors.input}
								strokeWidth={18}
								fill="none"
							/>
							{/* Progress circle */}
							<AnimatedCircle
								cx="100"
								cy="100"
								r={item.radius}
								stroke={item.color}
								strokeWidth={18}
								strokeDasharray={`${circumference}, ${circumference}`}
								strokeDashoffset={animatedValues[
									index
								].interpolate({
									inputRange: [0, 1],
									outputRange: [circumference, 0],
								})}
								strokeLinecap="round"
								fill="none"
								transform={`rotate(-90, 100, 100)`} // Rotate 90 degrees clockwise
							/>
						</React.Fragment>
					);
				})}
			</Svg>
		</View>
	);
};

export default DateWheelChart;
