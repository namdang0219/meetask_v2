import { CustomTouchableOpacity } from "components/custom";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationState } from "react-native-tab-view";
import Global from "utils/constants/Global";

type TabBarProps = {
	routes: {
		key: string;
		title: string;
	}[];
	index: number;
	jumpTo: (key: string) => void;
	navigationState: NavigationState<{
		key: string;
		title: string;
	}>;
};

const TabBar = ({ routes, index, jumpTo, navigationState }: TabBarProps) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			gap: 20,
			marginBottom: 14,
			marginTop: 18,
		},
		text: {
			fontSize: 16,
			fontWeight: "600",
		},
	});

	const handleTextColor = (route: { key: string; title: string }) => {
		return navigationState.routes[index].key === route.key
			? Global.colors.light.primary
			: Global.colors.light.gray;
	};

	return (
		<View style={styles.container}>
			{routes.map((route) => (
				<CustomTouchableOpacity
					key={route.key}
					onPress={() => jumpTo(route.key)}
				>
					<Text
						style={[
							styles.text,
							{
								color: handleTextColor(route),
							},
						]}
					>
						{route.title}
					</Text>
				</CustomTouchableOpacity>
			))}
		</View>
	);
};

export default TabBar;
