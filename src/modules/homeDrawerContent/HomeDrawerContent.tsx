import { View, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import GroupTab from "./tab/GroupTab";
import PersonalTab from "./tab/PersonalTab";
import LogoSection from "./content/LogoSection";
import TabBar from "./content/TabBar";
import { ViewInsetTop } from "components/view";
import { useTheme } from "@react-navigation/native";

const HomeDrawerContent = () => {
	const layout = useWindowDimensions();
	const { colors } = useTheme();
	const [index, setIndex] = useState(0);

	const [routes] = useState([
		{ key: "first", title: "個人" },
		{ key: "second", title: "グループ" },
	]);

	const sceneMap = SceneMap({
		first: PersonalTab,
		second: GroupTab,
	});

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colors.background,
			padding: 12,
		},
	});

	return (
		<ViewInsetTop style={styles.container}>
			<LogoSection />

			<TabView
				navigationState={{ index, routes }}
				renderScene={sceneMap}
				swipeEnabled={false}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
				renderTabBar={({ jumpTo, navigationState }) => (
					<TabBar
						index={index}
						jumpTo={jumpTo}
						navigationState={navigationState}
						routes={routes}
					/>
				)}
			/>
		</ViewInsetTop>
	);
};

export default HomeDrawerContent;
