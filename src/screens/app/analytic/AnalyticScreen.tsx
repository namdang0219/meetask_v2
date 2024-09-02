import React, { useState } from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import { ScrollView, View } from "react-native";
import AnimatedProgressWheel from "react-native-progress-wheel";
import { useTheme } from "@react-navigation/native";
import Global from "utils/constants/Global";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

const AnalyticScreen = () => {
	const { colors } = useTheme();
	const [selectedIndex, setSelectedIndex] = React.useState<
		IndexPath | IndexPath[]
	>(new IndexPath(0));

	return (
		<ViewInsetTop style={{ flex: 1 }}>
			<Header type="onlyTitle" title="Analytic"></Header>

			<View style={{ paddingHorizontal: Global.padding, marginBottom: 30, marginTop: 10 }}>
				<Select
					selectedIndex={selectedIndex}
					onSelect={(index) => setSelectedIndex(index)}
				>
					<SelectItem title="Option 1" />
					<SelectItem title="Option 2" />
					<SelectItem title="Option 3" />
				</Select>
			</View>
			<ScrollView style={{ paddingHorizontal: Global.padding }}>
				<AnimatedProgressWheel
					size={160}
					width={16}
					color={"#03c03c"}
					progress={65}
					backgroundColor={colors.input}
					duration={1000}
					showProgressLabel
					rotation={"-90deg"}
					labelStyle={{
						color: "#03c03c",
						fontWeight: "600",
						fontSize: 32,
					}}
					// subtitle={"完了"}
					// subtitleStyle={{ fontSize: 16 }}
					showPercentageSymbol
					rounded={true}
				/>
			</ScrollView>
		</ViewInsetTop>
	);
};

export default AnalyticScreen;
