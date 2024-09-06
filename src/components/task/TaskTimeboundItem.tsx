import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { TaskType } from "utils/types/dataTypes";

const TaskTimeboundItem = ({
	item: { category, priority, title, tags, scope, member },
}: {
	item: TaskType;
}) => {
	const { colors } = useTheme();
	const categories = useSelector((state: RootState) => state.category);
	const { photoUrl } = useSelector((state: RootState) => state.user);

	const styles = StyleSheet.create({
		container: {
			borderWidth: 0.5,
			borderColor: colors.icon + "cc",
			borderRadius: 10,
			flexDirection: "row",
			overflow: "hidden",
		},
		labelColor: {
			height: "100%",
			backgroundColor: categories.find((c) => c.name === category)?.color,
			width: 8,
		},
		contentContainer: {
			padding: 10,
			flex: 1,
		},
		titleContainer: {
			flexDirection: "row",
			flex: 1,
			justifyContent: "space-between",
			gap: 10,
			alignItems: "center",
		},
		title: {
			fontSize: 16,
			fontWeight: "500",
			flex: 1,
			color: colors.text,
		},
		priorityContainer: {
			paddingHorizontal: 12,
			paddingVertical: 3,
			borderRadius: 100,
			backgroundColor: setPriorityColor(priority) + "33",
		},
		priority: {
			color: setPriorityColor(priority),
			fontSize: 12,
			marginTop: -3,
		},
		timeRange: {
			fontSize: 12,
			color: colors.icon,
			marginTop: 4,
		},
		bottomContainer: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
			gap: 10,
			marginTop: 6,
		},
		tagsContainer: {
			flex: 1,
			flexDirection: "row",
			gap: 8,
		},
		tagItem: {
			paddingHorizontal: 6,
			paddingVertical: 2,
			borderRadius: 4,
		},
		tagName: {
			fontSize: 12,
			marginTop: -2,
			color: "white",
		},
		bottomRightContainer: {
			flexDirection: "row",
			alignItems: "center",
			gap: 4,
		},
		scopeName: {
			fontSize: 12,
			color: colors.icon,
		},
		personalScopeContainer: {
			width: 26,
			height: 26,
			backgroundColor: "white",
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
		},
		personalImage: {
			width: 22,
			height: 22,
			borderRadius: 100,
			backgroundColor: "orange",
			resizeMode: "cover",
		},
		memberItem: {
			width: 26,
			height: 26,
			backgroundColor: "white",
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
		},
		memberContainer: {
			backgroundColor: "#14b8a6",
			width: 22,
			height: 22,
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
		},
		memberName: {
			fontSize: 12,
			color: "white",
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.labelColor} />
			<View style={styles.contentContainer}>
				{/* title line  */}
				<View style={styles.titleContainer}>
					<Text style={styles.title} numberOfLines={1}>
						{title}
					</Text>
					<View style={styles.priorityContainer}>
						<Text style={styles.priority}>
							{setPriorityJapanese(priority)}
						</Text>
					</View>
				</View>

				{/* time line  */}
				<Text style={styles.timeRange}>10:20 ~ 10:50</Text>

				{/* bottom  */}
				<View style={styles.bottomContainer}>
					{/* left view  */}
					<View style={styles.tagsContainer}>
						{tags &&
							tags.length > 0 &&
							tags.slice(0, 2).map((tag, index) => (
								<View
									key={tag}
									style={[
										styles.tagItem,
										{
											backgroundColor:
												index === 0
													? "#7c3aed"
													: index === 1
													? "#f97316"
													: "#f43f5e",
										},
									]}
								>
									<Text style={styles.tagName}>{tag}</Text>
								</View>
							))}
					</View>

					{/* right view  */}
					<View style={styles.bottomRightContainer}>
						<Text style={styles.scopeName}>
							{scope === "PERSONAL" ? "個人" : "メンバー"}
						</Text>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							{scope === "PERSONAL" && (
								<View style={styles.personalScopeContainer}>
									<Image
										source={{
											uri: photoUrl,
										}}
										style={styles.personalImage}
									/>
								</View>
							)}
							{scope === "GROUP" &&
								member &&
								member.length > 0 &&
								member.map((m, index) => (
									<View
										key={index}
										style={[
											styles.memberItem,
											{
												marginLeft:
													index === 0 ? 0 : -10,
											},
										]}
									>
										<View style={styles.memberContainer}>
											<Text style={styles.memberName}>
												{m.slice(0, 1)}
											</Text>
										</View>
									</View>
								))}
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const setPriorityColor = (priority: "LOW" | "NORMAL" | "HIGH" | undefined) => {
	switch (priority) {
		case "LOW":
			return "#38bdf8"; // Blue
		case "NORMAL":
			return "#22c55e"; // Green
		case "HIGH":
			return "#ef4444"; // Red
		default:
			return "yellow";
	}
};

const setPriorityJapanese = (
	priority: "LOW" | "NORMAL" | "HIGH" | undefined
) => {
	switch (priority) {
		case "LOW":
			return "低";
		case "NORMAL":
			return "中";
		case "HIGH":
			return "高";
		default:
			return "null";
	}
};

export default TaskTimeboundItem;
