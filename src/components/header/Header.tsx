import { View, Text, ViewProps } from "react-native";
import React, { ReactNode } from "react";
import { ViewInsetTop } from "components/view";
import Global from "utils/constants/Global";
import { Entypo } from "@expo/vector-icons";
import { currentRoute } from "utils/func";
import { CustomTouchableOpacity } from "components/custom";

type HeaderProps = ViewProps & {
	type?: "onlyTitle" | "titleWithBack" | "custom";
	title?: string;
	customHeaderRight?: ReactNode;
};

const Header = ({
	type = "onlyTitle",
	title = "Title",
	customHeaderRight,
}: HeaderProps) => {
	return (
		<ViewInsetTop>
			<View
				style={{
					height: 45,
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: Global.padding,
					justifyContent: "space-between",
				}}
			>
				{type === "onlyTitle" && (
					<Text style={{ fontSize: 24, fontWeight: "500" }}>
						{title}
					</Text>
				)}
				{type === "titleWithBack" && (
					<CustomTouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 6,
						}}
					>
						<Entypo
							name="chevron-thin-left"
							size={20}
							color={Global.colors.light.primary}
						/>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "400",
								color: Global.colors.light.primary,
							}}
						>
							{currentRoute().name}
						</Text>
					</CustomTouchableOpacity>
				)}
				{type === "custom" && (
					<>
						<Text style={{ fontSize: 24, fontWeight: "500" }}>
							{title}
						</Text>
						{customHeaderRight}
					</>
				)}
			</View>
		</ViewInsetTop>
	);
};

export default Header;
