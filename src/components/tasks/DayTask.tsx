import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "components/themed";
import { globalConstants } from "utils/constants/constant";
import { useTheme } from "@react-navigation/native";
import { Drawer, RadioButton } from "react-native-ui-lib";
import { EventItem, TaskItem } from "components/items";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DayTask = () => {
	const { colors } = useTheme();

	type initTaskType = {
		id: number;
		type: string;
		completed: boolean;
		content: string;
	}[];

	const initTasks: initTaskType = [
		{
			id: 1,
			type: "work",
			completed: false,
			content: "Fix slides design for tomorrow meeting",
		},
		{
			id: 2,
			type: "study",
			completed: true,
			content: "Do homework",
		},
		{
			id: 3,
			type: "shopping",
			completed: true,
			content: "Go shopping",
		},
		{
			id: 4,
			type: "study",
			completed: false,
			content: "Practice presentation",
		},
	];

	const [tasks, setTasks] = useState<initTaskType | undefined>(initTasks);

	const styles = StyleSheet.create({
		header: {
			paddingHorizontal: globalConstants.padding,
			marginBottom: 6,
		},
		leftCol: { width: 45 },
		headerTop: {
			flexDirection: "row",
			gap: 14,
			alignItems: "center",
		},
		date: {
			fontSize: 36,
			fontWeight: "600",
			textAlign: "center",
		},
		headerBottom: {
			flexDirection: "row",
			gap: 14,
			alignItems: "center",
		},
		day: {
			fontSize: 18,
			fontWeight: "500",
			textAlign: "center",
		},
		dayCount: { fontSize: 28, flex: 1, fontWeight: "500" },
		total: {
			fontSize: 14,
			fontWeight: "500",
			color: colors.subText,
		},
		timeZoneContainer: {
			flexDirection: "row",
			gap: 14,
			alignItems: "center",
			paddingHorizontal: globalConstants.padding,
		},
		timeZone: { textAlign: "center", color: colors.subText },
		timeZoneLine: {
			flex: 1,
			height: 0.75,
			backgroundColor: colors.subText,
			opacity: 0.8,
		},
	});

	const handleTaskStatus = (id: number) => {
		if (tasks) {
			const changeTask = tasks.find((task) => task.id === id);
			if (changeTask) {
				changeTask.completed = !changeTask.completed;
				const updatedTasks = tasks.map((task) =>
					task.id === id ? changeTask : task
				);
				setTasks(updatedTasks);
			}
		}
	};

	return (
		<View style={{ marginBottom: 16 }}>
			{/* header  */}
			<View style={styles.header}>
				{/* header top  */}
				<View style={styles.headerTop}>
					<View style={styles.leftCol}>
						<ThemedText style={styles.date}>17</ThemedText>
					</View>
					<ThemedText style={styles.dayCount}>Today</ThemedText>
				</View>

				{/* header bottom  */}
				<View style={styles.headerBottom}>
					<View style={styles.leftCol}>
						<ThemedText style={styles.day}>Thu</ThemedText>
					</View>
					<ThemedText style={styles.total}>
						2 events & 3 tasks
					</ThemedText>
				</View>
			</View>

			{/* body  */}
			<View>
				{/* checkbox task  */}

				{/* checkbox header  */}
				<View style={styles.timeZoneContainer}>
					<View style={styles.leftCol}>
						<ThemedText style={styles.timeZone}>6:00</ThemedText>
					</View>
					<View style={styles.timeZoneLine}></View>
				</View>

				{/* checkbox content  */}
				<View
					style={{
						flexDirection: "row",
						paddingHorizontal: globalConstants.padding,
						gap: 14,
						paddingVertical: 10,
					}}
				>
					{/* left spacing  */}
					<View style={styles.leftCol}></View>

					{/* right content  */}
					<View style={{ flex: 1 }}>
						{tasks && tasks.length === 0 ? (
							<ThemedText>Your task is empty</ThemedText>
						) : (
							tasks &&
							tasks.map((task) => (
								<TaskItem
									key={task.id}
									task={task}
									handleTaskStatus={handleTaskStatus}
								></TaskItem>
							))
						)}
					</View>
				</View>

				{/* event task  */}

				{/* event header  */}
				<View style={styles.timeZoneContainer}>
					<View style={styles.leftCol}>
						<ThemedText style={styles.timeZone}>12:00</ThemedText>
					</View>
					<View style={styles.timeZoneLine}></View>
				</View>

				{/* event content  */}
				<View style={{ paddingVertical: 10, gap: 10 }}>
					{/* event content 1  */}
					<Drawer
						rightItems={[
							{
								width: 80,
								customElement: (
									<View
										style={{ alignItems: "center", gap: 4 }}
									>
										<Ionicons
											name="play-outline"
											size={24}
											color="white"
										/>
										<Text style={{ color: "white" }}>
											開始
										</Text>
									</View>
								),
								background: "orange",
								onPress: () => console.log("read pressed"),
							},
							{
								width: 80,
								customElement: (
									<View
										style={{ alignItems: "center", gap: 4 }}
									>
										<Feather
											name="check"
											size={24}
											color="white"
										/>
										<Text style={{ color: "white" }}>
											完成
										</Text>
									</View>
								),
								background: "#00CF6C",
								onPress: () => console.log("read pressed"),
							},
						]}
					>
						<EventItem />
					</Drawer>

					{/* event content 2  */}
					<EventItem />
				</View>
			</View>
		</View>
	);
};

export default DayTask;
