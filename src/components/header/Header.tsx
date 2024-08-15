import { View, Text, ViewProps, StyleSheet } from "react-native";
import React from "react";
import { ViewInsetTop } from "components/view";
import Global from "utils/constants/Global";
import { Entypo } from "@expo/vector-icons";

type HeaderProps = ViewProps & {
	title?: string;
};

const Header = ({ children, title }: HeaderProps) => {
	const styles = StyleSheet.create({
		container: {
			height: 50,
			paddingHorizontal: Global.padding,
			flexDirection: "row",
			alignItems: "center",
			borderBottomColor: Global.colors.border,
			borderBottomWidth: 0.75,
		},
	});

	return (
		<ViewInsetTop>
			<View style={styles.container}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 6,
					}}
				>
					{children && (
						<>
							<Entypo name="chevron-thin-left" size={20} />
							<Text style={{ fontSize: 20, fontWeight: "400" }}>
								{children}
							</Text>
						</>
					)}
					{title && (
						<Text style={{ fontSize: 24, fontWeight: "500" }}>
							Menu
						</Text>
					)}
				</View>
			</View>
		</ViewInsetTop>
	);
};

export default Header;
