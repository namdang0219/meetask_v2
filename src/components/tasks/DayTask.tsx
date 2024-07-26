import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "components/themed";
import { globalConstants } from "utils/constants/constant";
import { useTheme } from "@react-navigation/native";
import { RadioButton } from "react-native-ui-lib";

const DayTask = () => {
	const { colors } = useTheme();

	const setTaskColor = (type: string) => {
		switch (type) {
			case "work":
				return "orange";
			case "study":
				return "green";
			case "shopping":
				return "blue";
			default:
				return colors.primary;
		}
	};

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
		<View>
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
								<View
									key={task.id}
									style={{ paddingVertical: 6 }}
								>
									<RadioButton
										label={task.content}
										color={setTaskColor(task.type)}
										size={22}
										labelStyle={{
											marginLeft: 10,
											textDecorationLine: task.completed
												? "line-through"
												: "none",
											color: task.completed
												? colors.subText
												: colors.text,
										}}
										selected={task.completed}
										onPress={() =>
											handleTaskStatus(task.id)
										}
									/>
								</View>
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
				<View style={{paddingVertical: 10, gap: 10}}>
					{/* event content 1  */}
					<View
						style={{
							flexDirection: "row",
							paddingHorizontal: globalConstants.padding,
							gap: 14,
						}}
					>
						{/* left spacing  */}
						<View style={styles.leftCol}></View>
						{/* right content  */}
						<View style={{ flex: 1 }}>
							<View
								style={{
									paddingHorizontal: 14,
									paddingVertical: 10,
									backgroundColor: "#00CF6C",
									borderRadius: 15,
									gap: 4,
								}}
							>
								<Text
									style={{
										fontSize: 14,
										fontWeight: "500",
										color: "white",
									}}
								>
									13:20
								</Text>
								<Text
									numberOfLines={1}
									style={{
										fontSize: 18,
										color: "white",
										fontWeight: "500",
									}}
								>
									Do home work
								</Text>
								<Text style={{ color: "white" }}>
									at {"Your home"}
								</Text>
							</View>
						</View>
					</View>

					{/* event content 2  */}
					<View
						style={{
							flexDirection: "row",
							paddingHorizontal: globalConstants.padding,
							gap: 14,
						}}
					>
						{/* left spacing  */}
						<View style={styles.leftCol}></View>
						{/* right content  */}
						<View style={{ flex: 1 }}>
							<View
								style={{
									paddingHorizontal: 14,
									paddingVertical: 10,
									backgroundColor: "#F8BD00",
									borderRadius: 15,
									gap: 4,
								}}
							>
								<Text
									style={{
										fontSize: 14,
										fontWeight: "500",
										color: "white",
									}}
								>
									13:20
								</Text>
								<Text
									numberOfLines={1}
									style={{
										fontSize: 18,
										color: "white",
										fontWeight: "500",
									}}
								>
									Do home work
								</Text>
								<Text style={{ color: "white" }}>
									at {"Your home"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default DayTask;
