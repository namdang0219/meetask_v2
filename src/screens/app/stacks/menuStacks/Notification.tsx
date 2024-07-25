import { View, Text, ScrollView } from "react-native";
import React from "react";
import { NotificationItem } from "components/items";

const Notification = () => {
	return (
		<View>
			<ScrollView style={{ paddingTop: 10 }}>
				{Array(10)
					.fill(null)
					.map((item, index) => (
						<NotificationItem key={index}></NotificationItem>
					))}
			</ScrollView>
		</View>
	);
};

export default Notification;
