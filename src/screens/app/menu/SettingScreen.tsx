import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { ViewInsetTop } from "components/view";
import { Header } from "components/header";
import Global from "utils/constants/Global";

const SettingScreen = () => {
	const [isDarkmode, setIsDarkmode] = useState(false);

	return (
		<ViewInsetTop>
			<Header type="titleWithBack" title="設定" />
			<View style={{paddingHorizontal: Global.padding}}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 18 }}>ダークモード</Text>
					<Switch
						value={isDarkmode}
						onChange={() => setIsDarkmode(!isDarkmode)}
						trackColor={{ true: Global.colors.light.primary }}
            thumbColor={'white'}
					></Switch>
				</View>
			</View>
		</ViewInsetTop>
	);
};

export default SettingScreen;
