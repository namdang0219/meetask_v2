import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import DayTask from "components/tasks/DayTask";
import { StatusBar } from 'expo-status-bar';

const Home = () => {
	const { width } = useWindowDimensions();
	return (
		<>
		<StatusBar style="dark" />
			<ScrollView style={{paddingTop: 6}}>
				<DayTask></DayTask>
				<DayTask></DayTask>
			</ScrollView>
		</>
	);
};

export default Home;
