import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import Global from "utils/constants/Global";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";
import { TaskCheckItem, TaskTimeboundItem } from "components/task";

const HomeScreen = () => {
	const { photoUrl } = useSelector((state: RootState) => state.user);
	const categories = useSelector((state: RootState) => state.category);
	const tasks = useSelector((state: RootState) => state.task);
	const { colors } = useTheme();

	const checklistTasks = tasks.filter((task) => task.taskType == "CHECKLIST");
	const timeboundTasks = tasks.filter((task) => task.taskType == "TIMEBOUND");

	return (
		<ScrollView
			style={{
				paddingHorizontal: Global.padding,
				flex: 1,
				marginTop: 50,
			}}
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
						color: colors.text,
					}}
				>
					20
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "500",
						color: colors.text,
					}}
				>
					Today
				</Text>
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
						color: colors.text,
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
						{checklistTasks &&
							checklistTasks.length > 0 &&
							checklistTasks.map((t) => (
								<TaskCheckItem key={t.tid} item={t}></TaskCheckItem>
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
						{timeboundTasks &&
							timeboundTasks.length > 0 &&
							timeboundTasks.map((t) => (
								<TaskTimeboundItem key={t.tid} item={t}></TaskTimeboundItem>
							))}
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;
