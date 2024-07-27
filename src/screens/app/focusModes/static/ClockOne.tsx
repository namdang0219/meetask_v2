import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
StatusBar;

const ClockOne = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		// lock landscape func
		const lockOrientation = async () => {
			await ScreenOrientation.lockAsync(
				ScreenOrientation.OrientationLock.LANDSCAPE
			);
		};
		lockOrientation();

		return () => {
			ScreenOrientation.unlockAsync();
		};
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		// Clear interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	const formatTime = (time: any) => {
		const hours = time.getHours().toString().padStart(2, "0");
		const minutes = time.getMinutes().toString().padStart(2, "0");
		const seconds = time.getSeconds().toString().padStart(2, "0");
		return `${hours}:${minutes}:${seconds}`;
	};

	const styles = StyleSheet.create({
		text: {
			fontSize: 250,
			fontWeight: "bold",
			color: "white",
		},
	});

	return (
		<View
			style={{
				backgroundColor: "black",
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
        flexDirection: 'row',
        
			}}
		>
			{/* <Text style={[styles.text]}>
				{formatTime(currentTime).slice(0, 1)}
			</Text>
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(1, 2)}
			</Text>
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(2, 3)}
			</Text> */}
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(3, 4)}
			</Text>
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(4, 5)}
			</Text>
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(5, 6)}
			</Text>
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(6, 7)}
			</Text>
			<Text style={[styles.text]}>
				{formatTime(currentTime).slice(7, 8)}
			</Text>
		</View>
	);
};

export default ClockOne;
