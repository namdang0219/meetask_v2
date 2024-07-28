import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ExpandableSection } from "react-native-ui-lib";
import { globalConstants } from "utils/constants/constant";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Help = () => {
	const [QAData, setQAData] = useState<QAType>(QA);
	const { width } = useWindowDimensions();
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		container: {
			paddingHorizontal: globalConstants.padding,
			paddingTop: 8,
		},
		header: {
			fontSize: 20,
			fontWeight: "500",
		},
		body: {
			fontSize: 16,
			lineHeight: 18,
		},
	});

	const handleShow = (id: number) => {
		const QAclone = [...QAData];
		const pressed = QAclone.find((item) => item.id === id);
		if (pressed) {
			pressed.showing = !pressed.showing;
			const updateQA = [...QAclone, pressed];
			setQAData(updateQA);
		}
	};

	return (
		<ScrollView style={styles.container}>
			{QA.map((item) => (
				<View key={item.id} style={{ marginBottom: 20 }}>
					<ExpandableSection
						top={false}
						expanded={QA.find((i) => item.id === i.id)?.showing}
						sectionHeader={
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									gap: 60,
									width: width - globalConstants.padding * 2,
								}}
							>
								<Text
									lineBreakMode="clip"
									style={[
										styles.header,
										{
											flex: 1,
											color: QA.find(
												(i) => item.id === i.id
											)?.showing
												? colors.primary
												: "black",
										},
									]}
								>
									{item.question}
								</Text>
								<View
									style={{
										flexShrink: 0,
										width: 30,
										height: 30,
										marginTop: -2,
									}}
								>
									<Entypo
										name="chevron-small-down"
										size={30}
										style={{
											transform: [
												{
													rotate: QA.find(
														(i) => item.id === i.id
													)?.showing
														? "-180deg"
														: "0deg",
												},
											],
										}}
									/>
								</View>
							</View>
						}
						onPress={() => handleShow(item.id)}
					>
						<View style={{ marginTop: 10 }}>
							<Text style={styles.body}>{item.answer}</Text>
						</View>
					</ExpandableSection>
				</View>
			))}
		</ScrollView>
	);
};

type QAType = {
	id: number;
	question: string;
	answer: string;
	showing: boolean;
}[];

const QA: QAType = [
	{
		id: 1,
		question: "How do I create a new task?",
		answer: 'To create a new task, tap the "+" or "Create new task" button on the main screen. Then, enter the title, description, and select the date, time, and priority level for your task. Finally, tap "Save" to complete the task creation process.',
		showing: false,
	},
	{
		id: 2,
		question: "How do I share a task with group members?",
		answer: 'To share a task with group members, open the task you want to share, then tap the "Share" icon. Select the members from the list or enter their email addresses. Finally, tap "Send" to share the task.',
		showing: false,
	},
	{
		id: 3,
		question: "How do I track the progress of tasks?",
		answer: 'You can track the progress of tasks by going to the "Task List" or "Group Tasks" screen. Here, you will see tasks categorized by status such as "Not Started," "In Progress," and "Completed." You can also tap on each task to view details and update the status if needed.',
		showing: false,
	},
];

export default Help;
