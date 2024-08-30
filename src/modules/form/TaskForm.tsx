import { View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Global from "utils/constants/Global";
import { Button } from "components/button";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import TaskPersionalTab from "./tab/TaskPersionalTab";
import TaskGroupTab from "./tab/TaskGroupTab";
import { useTheme } from "@react-navigation/native";
import { ViewInsetBottom } from "components/view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TaskForm = () => {
	const layout = useWindowDimensions();
	const [index, setIndex] = useState(0);
	const { colors } = useTheme();
	const { bottom } = useSafeAreaInsets();

	const [routes] = useState([
		{ key: "first", title: "個人" },
		{ key: "second", title: "グループ" },
	]);

	const sceneMap = SceneMap({
		first: TaskPersionalTab,
		second: TaskGroupTab,
	});

	return (
		<View style={{ flex: 1, paddingBottom: bottom }}>
			<TabView
				navigationState={{ index, routes }}
				renderScene={sceneMap}
				onIndexChange={setIndex}
				swipeEnabled={false}
				initialLayout={{ width: layout.width }}
				renderTabBar={(props) => (
					<TabBar
						style={{
							backgroundColor: colors.background,
							elevation: 0,
						}}
						pressColor={colors.background}
						labelStyle={{ color: colors.text }}
						indicatorStyle={{ backgroundColor: colors.primary }}
						{...props}
					/>
				)}
			/>

			<Button style={{ margin: Global.padding }}>タスクを追加</Button>
		</View>
	);
};

export default TaskForm;
