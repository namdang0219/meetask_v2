import { View, Text, Image } from "react-native";
import React from "react";
import { CustomTouchableOpacity } from "components/customs";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "components/themed";
import { globalConstants } from "utils/constants/constant";

const NotificationItem = ({unread = false}: {unread?: boolean}) => {
	const {colors} = useTheme()
	return (
		<CustomTouchableOpacity
			style={{
				flexDirection: "row",
				paddingHorizontal: globalConstants.padding,
				paddingVertical: 10,
				gap: 10,
				backgroundColor: unread ? colors.inputBackground : "transparent"
			}}
		>
			<View>
				<Image
					source={{
						uri: "https://i.pinimg.com/736x/ee/02/b3/ee02b3b67c0eab6075b67b81abaacf56.jpg",
					}}
					style={{ width: 50, height: 50, borderRadius: 100 }}
				></Image>
			</View>
			<View style={{ flex: 1 }}>
				<View style={{ height: 48}}>
					<ThemedText
						style={{
							fontSize: 16,
							fontWeight: "600",
							lineHeight: 22,
						}}
						numberOfLines={2}
					>
						Yaho{" "}
						<Text style={{ fontWeight: "400" }}>
							was mentioned you into a new task.
						</Text>
					</ThemedText>
				</View>
				<View>
					<Text style={{color: colors.bottomIconDefault}}>15 minutes ago</Text>
				</View>
			</View>
		</CustomTouchableOpacity>
	);
};

export default NotificationItem;
