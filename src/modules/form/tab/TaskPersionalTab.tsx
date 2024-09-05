import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { FieldSmall } from "components/common";
import { InputSmall } from "components/input";
import { ViewFull } from "components/view";
import { DateTimePicker } from "react-native-ui-lib";
import Global from "utils/constants/Global";
import { useTheme } from "@react-navigation/native";
import { Feather, Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { RootState } from "store/configureStore";

const TaskPersionalTab = () => {
	const { colors } = useTheme();
	const categories = useSelector((state: RootState) => state.category)
	const [choosedCategory, setChoosedCategory] = useState<string>(
		categories[0].cid
	);

	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
			<ViewFull
				style={{
          paddingTop: 16,
					paddingHorizontal: Global.padding,
					gap: 18,
					paddingBottom: Global.padding,
				}}
			>
				{/* title  */}
				<FieldSmall label="タイトル">
					<InputSmall />
				</FieldSmall>

				{/* description  */}
				<FieldSmall label="説明">
					<InputSmall />
				</FieldSmall>

				{/* category  */}
				<FieldSmall label="カテゴリ" style={{ gap: 14 }}>
					<View
						style={{
							flexDirection: "row",
							gap: 10,
							flexWrap: "wrap",
						}}
					>
						{categories.length > 0 &&
							categories.map((c) => (
								<Pressable
									key={c.cid}
									onPress={() => setChoosedCategory(c.cid)}
									style={{
										backgroundColor:
											choosedCategory === c.cid
												? c.color
												: colors.input,
										paddingHorizontal: 14,
										paddingVertical: 6,
										borderRadius: 6,
									}}
								>
									<Text
										style={{
											fontSize: 16,
											color:
												choosedCategory === c.cid
													? "white"
													: colors.text,
										}}
									>
										{c.name}
									</Text>
								</Pressable>
							))}
					</View>
				</FieldSmall>

				{/* Time  */}
				<FieldSmall label="日付">
					<View style={{ gap: 14 }}>
						<View
							style={{
								height: 45, // same height with input small component
								paddingHorizontal: 12,
								borderColor: colors.icon,
								borderWidth: 0.5,
								borderRadius: 6,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<DateTimePicker
								mode={"date"}
								placeholder={"Select time"}
								value={new Date()}
								style={{ fontSize: 18, color: colors.text }}
							/>
							<Ionicons
								name="calendar-outline"
								size={24}
								color={colors.icon}
							/>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: Global.padding,
							}}
						>
							<View
								style={{
									flex: 1,
									height: 45, // same height with input small component
									paddingHorizontal: 12,
									borderColor: colors.icon,
									borderWidth: 0.5,
									borderRadius: 6,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<DateTimePicker
									mode={"time"}
									placeholder={"Select time"}
									value={new Date()}
									style={{ fontSize: 18, color: colors.text }}
								/>
								<Feather
									name="clock"
									size={24}
									color={colors.icon}
								/>
							</View>
							<View
								style={{
									flex: 1,
									height: 45, // same height with input small component
									paddingHorizontal: 12,
									borderColor: colors.icon,
									borderWidth: 0.5,
									borderRadius: 6,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-between",
								}}
							>
								<DateTimePicker
									mode={"time"}
									placeholder={"Select time"}
									value={new Date()}
									style={{ fontSize: 18, color: colors.text }}
								/>
								<Feather
									name="clock"
									size={24}
									color={colors.icon}
								/>
							</View>
						</View>
					</View>
				</FieldSmall>
			</ViewFull>
			<View style={{ height: 500 }}></View>
		</ScrollView>
	);
};

export default TaskPersionalTab;
