import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import DayTask from "components/tasks/DayTask";

const Home = () => {
	const { width } = useWindowDimensions();
	return (
		<ScrollView>
			{/* <DayTask></DayTask> */}
			<Image
				source={require("../../../../../assets/images/homec.png")}
				style={{ width: width, height: 660 }}
			></Image>
		</ScrollView>
	);
};

export default Home;
