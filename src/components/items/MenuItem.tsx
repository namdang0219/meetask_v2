// import { View, Text } from "react-native";
// import React, { ReactNode } from "react";
// import { CustomTouchableOpacity } from "components/customs";
// import { globalConstants } from "constants/constant";
// import { ThemedText } from "components/themed";
// import { ArrowRight } from "components/icons";
// import { useNavigation } from "@react-navigation/native";
// import { MenuItemProps } from "types/mixTypes";

// const MenuItem = ({ item: { icon, title, to } }: { item: MenuItemProps }) => {
// 	const { navigate } = useNavigation<any>();
  
// 	return (
// 		<CustomTouchableOpacity
// 			style={{
// 				paddingHorizontal: globalConstants.padding,
// 				paddingVertical: 10,
// 				flexDirection: "row",
// 				alignItems: "center",
// 				justifyContent: "space-between",
// 			}}
// 			onPress={typeof to === "string" ? () => navigate(to) : to}
// 		>
// 			<View
// 				style={{
// 					flexDirection: "row",
// 					alignItems: "center",
// 					justifyContent: "center",
// 					gap: 12,
// 				}}
// 			>
// 				<View
// 					style={{
// 						width: 34,
// 						height: 34,
// 						justifyContent: "center",
// 						alignItems: "center",
// 					}}
// 				>
// 					{icon}
// 				</View>
// 				<ThemedText style={{ fontSize: 16, fontWeight: "500" }}>
// 					{title}
// 				</ThemedText>
// 			</View>
// 			<ArrowRight></ArrowRight>
// 		</CustomTouchableOpacity>
// 	);
// };

// export default MenuItem;


import { View, Text } from 'react-native'
import React from 'react'

const MenuItem = () => {
	return (
		<View>
			<Text>MenuItem</Text>
		</View>
	)
}

export default MenuItem