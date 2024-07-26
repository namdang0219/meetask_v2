import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import DayTask from "components/tasks/DayTask";

const Home = () => {
	const { width } = useWindowDimensions();
	return (
		<ScrollView style={{paddingTop: 6}}>
			<DayTask></DayTask>
		</ScrollView>
	);
};

export default Home;
