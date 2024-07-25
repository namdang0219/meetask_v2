import { View, Text, Pressable } from "react-native";
import React from "react";
import { StaticHeader } from "layouts";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ThemedText } from "components/themed";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "react-native-ui-lib";
import { CustomTouchableOpacity } from "components/customs";

const HomeDrawerHeader = ({ navigation }: { navigation: any }) => {
	const { colors } = useTheme();
	return (
		<StaticHeader>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 14,
					flex: 1,
				}}
			>
				<Pressable onPress={() => navigation.openDrawer()}>
					<SimpleLineIcons name="menu" size={22}></SimpleLineIcons>
				</Pressable>
				<View style={{ flex: 1 }}>
					<ThemedText
						numberOfLines={1}
						style={{ fontSize: 24, fontWeight: 500 }}
					>
						Good Morning,{" "}
						<Text style={{ color: colors.primary }}>
							二ャム
						</Text>
					</ThemedText>
				</View>
			</View>
			<CustomTouchableOpacity onPress={() => navigation.navigate('Profile')}>
				<Avatar
					size={38}
					animate
					source={{
						uri: "https://i.pinimg.com/564x/f8/b1/8c/f8b18cb33351da5f6ef7be3461ac12c6.jpg",
					}}
					label="avatar"
				/>
			</CustomTouchableOpacity>
		</StaticHeader>
	);
};

export default HomeDrawerHeader;
