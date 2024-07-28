import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalConstants } from "utils/constants/constant";

const EventItem = () => {
	const styles = StyleSheet.create({
		leftCol: { width: 45 },
		container: {
			flexDirection: "row",
			paddingHorizontal: globalConstants.padding,
			gap: 14,
      backgroundColor: 'white'
		},
		itemContainer: {
			paddingHorizontal: 14,
			paddingVertical: 10,
			backgroundColor: "#00CF6C",
			borderRadius: 15,
			gap: 4,
		},
		time: {
			fontSize: 14,
			fontWeight: "500",
			color: "white",
		},
		content: {
			fontSize: 18,
			color: "white",
			fontWeight: "500",
		},
		location: { color: "white" },
	});

	return (
		<View style={styles.container}>
			{/* left spacing  */}
			<View style={styles.leftCol}></View>
			{/* right content  */}
			<View style={{ flex: 1 }}>
				<View style={styles.itemContainer}>
					<Text style={styles.time}>13:20</Text>
					<Text numberOfLines={1} style={styles.content}>
						Do home work
					</Text>
					<Text style={styles.location}>at {"Your home"}</Text>
				</View>
			</View>
		</View>
	);
};

export default EventItem;
