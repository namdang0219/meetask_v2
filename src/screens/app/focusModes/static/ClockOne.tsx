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
		container: {
			backgroundColor: "black",
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
		},
		containerCenter: { flexDirection: "row" },
		text: {
			fontSize: 300,
			fontWeight: "900",
			// color: "white",
			opacity: 0.6,
			// backgroundColor: 'pink'
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.containerCenter}>
				<View style={{ width: 200 }}>
					<Text style={[styles.text, { color: "cyan" }]}>
						{formatTime(currentTime).slice(3, 4)}
					</Text>
				</View>
				<View style={{ width: 200, marginLeft: -68 }}>
					<Text style={[styles.text, { color: "yellow" }]}>
						{formatTime(currentTime).slice(4, 5)}
					</Text>
				</View>
				<View style={{ marginLeft: -34 }}>
					<Text style={[styles.text, { color: "pink" }]}>
						{formatTime(currentTime).slice(5, 6)}
					</Text>
				</View>
				<View style={{ width: 200, marginLeft: -50 }}>
					<Text style={[styles.text, { color: "green" }]}>
						{formatTime(currentTime).slice(6, 7)}
					</Text>
				</View>
				<View style={{ width: 200, marginLeft: -68 }}>
					<Text style={[styles.text, { color: "cyan" }]}>
						{formatTime(currentTime).slice(7, 8)}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default ClockOne;
