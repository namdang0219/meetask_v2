import { View, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import GroupTab from "./tab/GroupTab";
import PersonalTab from "./tab/PersonalTab";
import LogoSection from "./content/LogoSection";
import TabBar from "./content/TabBar";
import { ViewInsetTop } from "components/view";

const HomeDrawerContent = () => {
	const layout = useWindowDimensions();
	const [index, setIndex] = useState(0);

	const [routes] = useState([
		{ key: "first", title: "個人" },
		{ key: "second", title: "グループ" },
	]);

	const sceneMap = SceneMap({
		first: PersonalTab,
		second: GroupTab,
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 12,
	},
});

export default HomeDrawerContent;
