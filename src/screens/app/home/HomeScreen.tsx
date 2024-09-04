import { View, Text, FlatList, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { taskMocks } from "mock/taskMocks";
import Global from "utils/constants/Global";
import { ViewFull } from "components/view";
import { TaskType } from "utils/types/dataTypes";
import { useTheme } from "@react-navigation/native";
import { RadioButton } from "react-native-ui-lib";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const HomeScreen = () => {
	const { photoUrl } = useSelector((state: RootState) => state.user);
	const { colors } = useTheme();
	const categories = useSelector((state: RootState) => state.category)
	const [tasks, setTasks] = useState<TaskType[]>([
		{
			tid: "1",
			category: "Shopping",
			priority: "LOW",
			status: "UNCOMPLETE",
			title: "Buy name card",
		},
		{
			tid: "2",
			category: "Study",
			priority: "NORMAL",
			status: "COMPLETE",
			title: "Do history homework",
		},
		{
			tid: "3",
			category: "Shopping",
			priority: "NORMAL",
			status: "COMPLETE",
			title: "Buy some rices",
		},
		{
			tid: "4",
			category: "Health",
			priority: "NORMAL",
			status: "UNCOMPLETE",
			title: "Go to teeth doctor",
		},
	]);

	const handleStatusChange = (taskId: string) => {
		const updatedTasks: TaskType[] = tasks.map((task) =>
			task.tid === taskId
				? {
						...task,
						status:
							task.status === "UNCOMPLETE"
								? "COMPLETE"
								: "UNCOMPLETE",
				  }
				: task
		);
		setTasks(updatedTasks);
	};

	return (
		<ScrollView
			style={{ paddingHorizontal: Global.padding, flex: 1, marginTop: 50 }}
			contentContainerStyle={{ flexGrow: 1 }}
			nestedScrollEnabled
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				<Text
					style={{
						width: 60,
						fontSize: 30,
						fontWeight: "600",
						textAlign: "center",
					}}
				>
					20
				</Text>
				<Text style={{ fontSize: 20, fontWeight: "500" }}>Today</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 10,
				}}
			>
				<Text
					style={{
						width: 60,
						fontSize: 16,
						fontWeight: "600",
						textAlign: "center",
					}}
				>
					Mon
				</Text>
				<Text
					style={{
						fontSize: 14,
						fontWeight: "500",
						color: colors.icon,
					}}
				>
					2/3 完成
				</Text>
			</View>

			{/* 6:00  */}
			<View style={{ marginBottom: 10 }}>
				<View
					style={{
						marginTop: 6,
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}
				>
					<Text
						style={{
							width: 60,
							textAlign: "center",
							color: colors.icon,
						}}
					>
						06:00
					</Text>
					<View
						style={{
							height: 0.5,
							backgroundColor: colors.icon,
							flex: 1,
							marginTop: 2,
						}}
					/>
				</View>
				{/* radio task field  */}
				<View
					style={{
						marginTop: 6,
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}
				>
					<View style={{ width: 60 }} />
					<View style={{ gap: 8 }}>
						{tasks &&
							tasks.length > 0 &&
							tasks.map((t) => (
								<View key={t.tid}>
									<RadioButton
										selected={
											t.status === "COMPLETE"
												? true
												: false
										}
										label={t.title}
										onPress={() =>
											handleStatusChange(t.tid)
										}
										labelStyle={{
											fontSize: 16,
											marginLeft: 10,
											color:
												t.status === "COMPLETE"
													? colors.icon
													: colors.text,
											textDecorationLine:
												t.status === "COMPLETE"
													? "line-through"
													: "none",
										}}
										size={18}
										color={
											categories.find(
												(c) => c.name === t.category
											)?.color
										}
									/>
								</View>
							))}
					</View>
				</View>
			</View>

			{/* 9:00 event task field  */}
			<View>
				<View
					style={{
						marginTop: 6,
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}
				>
					<Text
						style={{
							width: 60,
							textAlign: "center",
							color: colors.icon,
						}}
					>
						09:00
					</Text>
					<View
						style={{
							height: 0.5,
							backgroundColor: colors.icon,
							flex: 1,
							marginTop: 2,
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: "row",
						gap: 10,
						marginTop: 10,
					}}
				>
					<View style={{ width: 60 }} />
					<View style={{ flex: 1, gap: 10 }}>
						{taskMocks &&
							taskMocks.length > 0 &&
							taskMocks.map((t) => (
								<View key={t.tid}>
									<View
										style={{
											borderWidth: 0.5,
											borderColor: colors.icon + "cc",
											borderRadius: 10,
											flexDirection: "row",
											overflow: "hidden",
										}}
									>
										<View
											style={{
												height: "100%",
												backgroundColor:
													categories.find(
														(c) =>
															c.name ===
															t.category
													)?.color,
												width: 8,
											}}
										/>
										<View
											style={{
												padding: 10,
												flex: 1,
											}}
										>
											{/* title line  */}
											<View
												style={{
													flexDirection: "row",
													flex: 1,
													justifyContent:
														"space-between",
													gap: 10,
													alignItems: "center",
												}}
											>
												<Text
													style={{
														fontSize: 16,
														fontWeight: "500",
														flex: 1,
													}}
													numberOfLines={1}
												>
													{t.title}
												</Text>
												<View
													style={{
														paddingHorizontal: 12,
														paddingVertical: 3,
														borderRadius: 100,
														backgroundColor:
															setPriorityColor(
																t.priority
															) + "33",
													}}
												>
													<Text
														style={{
															color: setPriorityColor(
																t.priority
															),
															fontSize: 12,
															marginTop: -3,
														}}
													>
														{setPriorityJapanese(
															t.priority
														)}
													</Text>
												</View>
											</View>

											{/* time line  */}
											<Text
												style={{
													fontSize: 12,
													color: colors.icon,
													marginTop: 4,
												}}
											>
												10:20 ~ 10:50
											</Text>
											<View
												style={{
													flexDirection: "row",
													alignItems: "center",
													justifyContent:
														"space-between",
													gap: 10,
													marginTop: 6,
												}}
											>
												{/* left view  */}
												<View
													style={{
														flex: 1,
														flexDirection: "row",
														gap: 8,
													}}
												>
													{t.tags &&
														t.tags.length > 0 &&
														t.tags
															.slice(0, 2)
															.map(
																(
																	tag,
																	index
																) => (
																	<View
																		key={
																			tag
																		}
																		style={{
																			paddingHorizontal: 6,
																			paddingVertical: 2,
																			backgroundColor:
																				index ===
																				0
																					? "#7c3aed"
																					: index ===
																					  1
																					? "#f97316"
																					: "#f43f5e",
																			borderRadius: 4,
																		}}
																	>
																		<Text
																			style={{
																				fontSize: 12,
																				marginTop:
																					-2,
																				color: "white",
																			}}
																		>
																			{
																				tag
																			}
																		</Text>
																	</View>
																)
															)}
												</View>

												{/* right view  */}
												<View
													style={{
														flexDirection: "row",
														alignItems: "center",
														gap: 4,
													}}
												>
													<Text
														style={{
															fontSize: 12,
															color: colors.icon,
														}}
													>
														{t.scope === "PERSONAL"
															? "個人"
															: "メンバー"}
													</Text>
													<View
														style={{
															flexDirection:
																"row",
															alignItems:
																"center",
														}}
													>
														{t.scope ===
															"PERSONAL" && (
															<View
																style={{
																	width: 26,
																	height: 26,
																	backgroundColor:
																		"white",
																	borderRadius: 100,
																	justifyContent:
																		"center",
																	alignItems:
																		"center",
																}}
															>
																<Image
																	source={{
																		uri: photoUrl,
																	}}
																	style={{
																		width: 22,
																		height: 22,
																		borderRadius: 100,
																		backgroundColor:
																			"orange",
																		resizeMode:
																			"cover",
																	}}
																/>
															</View>
														)}
														{t.scope === "GROUP" &&
															t.member &&
															t.member.length >
																0 &&
															t.member.map(
																(m, index) => (
																	<View
																		key={
																			index
																		}
																		style={{
																			width: 26,
																			height: 26,
																			backgroundColor:
																				"white",
																			borderRadius: 100,
																			justifyContent:
																				"center",
																			alignItems:
																				"center",
																			marginLeft:
																				index ===
																				0
																					? 0
																					: -10,
																		}}
																	>
																		<View
																			style={{
																				backgroundColor:
																					"#14b8a6",
																				width: 22,
																				height: 22,
																				borderRadius: 100,
																				justifyContent:
																					"center",
																				alignItems:
																					"center",
																			}}
																		>
																			<Text
																				style={{
																					fontSize: 12,
																					color: "white",
																				}}
																			>
																				{m.slice(
																					0,
																					1
																				)}
																			</Text>
																		</View>
																	</View>
																)
															)}
													</View>
												</View>
											</View>
										</View>
									</View>
								</View>
							))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const setPriorityColor = (priority: "LOW" | "NORMAL" | "HIGH") => {
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

const setPriorityJapanese = (priority: "LOW" | "NORMAL" | "HIGH") => {
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

export default HomeScreen;
