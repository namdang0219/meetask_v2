import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
	const { navigate } = useNavigation<any>();

	return (
		<View>
			<TouchableOpacity onPress={() => navigate("NotificationScreen")}>
				<Text>Go to notification</Text>
			</TouchableOpacity>
		</View>
	);
};

export default MenuScreen;
