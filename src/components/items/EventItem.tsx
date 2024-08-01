import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { globalConstants } from "utils/constants/constant";
import { CategoryType, TaskType } from "utils/types";
import { categoryMocks } from "mocks";

const EventItem = ({ item }: { item: TaskType }) => {
	const styles = StyleSheet.create({
		leftCol: { width: 45 },
		container: {
			flexDirection: "row",
			paddingHorizontal: globalConstants.padding,
			gap: 14,
			backgroundColor: "white",
		},
		itemContainer: {
			paddingHorizontal: 14,
			paddingVertical: 10,
			backgroundColor: getCategoryColor(item.category),
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
					<Text style={styles.time}>{item?.hour}</Text>
					<Text numberOfLines={1} style={styles.content}>
						{item.title}
					</Text>
					<Text style={styles.location}>at {item.location}</Text>
				</View>
			</View>
		</View>
	);
};

const getCategoryColor = (
	taskCategory: TaskType["category"]
): string | undefined => {
	const category = categoryMocks.find((c) => c.name === taskCategory);
	return category ? category.color : undefined;
};

export default EventItem;
