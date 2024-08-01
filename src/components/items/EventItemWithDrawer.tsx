import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Drawer } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";
import EventItem from "./EventItem";
import { CategoryType, TaskType } from "utils/types";

const PlayIcon = () => <Ionicons name="play-outline" size={24} color="white" />;
const CheckIcon = () => <Feather name="check" size={24} color="white" />;

const EventItemWithDrawer = ({ item }: { item: TaskType }) => {
	const { navigate } = useNavigation<any>();

	return (
		<Drawer
			rightItems={[
				{
					width: 80,
					customElement: (
						<View style={styles.featureContainer}>
							<PlayIcon />
							<Text style={styles.featureText}>開始</Text>
						</View>
					),
					background: "orange",
					onPress: () =>
						navigate("FocusStack", {
							screen: "ClockOne",
						}),
				},
				{
					width: 80,
					customElement: (
						<View style={styles.featureContainer}>
							<CheckIcon />
							<Text style={styles.featureText}>完成</Text>
						</View>
					),
					background: "#00CF6C",
					onPress: () => console.log("read pressed"),
				},
			]}
		>
			<EventItem item={item} />
		</Drawer>
	);
};

const styles = StyleSheet.create({
	featureContainer: { alignItems: "center", gap: 4 },
	featureText: { color: "white" },
});

export default EventItemWithDrawer;
