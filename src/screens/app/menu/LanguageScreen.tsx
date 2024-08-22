import { CustomTouchableOpacity } from "components/custom";
import { Header } from "components/header";
import { ViewInsetTop } from "components/view";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Global from "utils/constants/Global";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const LanguageScreen = () => {
	const [currentLanguage, setCurrentLanguage] = useState(2);
	const { colors } = useTheme();

	const styles = StyleSheet.create({
		container: { paddingHorizontal: Global.padding },
		item: {
			paddingHorizontal: Global.padding,
			flexDirection: "row",
			borderRadius: 10,
			justifyContent: "space-between",
			paddingVertical: 8,
			alignItems: "center",
		},
	});

	return (
		<ViewInsetTop>
			<Header type="titleWithBack" title="言語" />
			<ScrollView style={styles.container}>
				{languages.map((language) => (
					<CustomTouchableOpacity
						key={language.id}
						onPress={() => setCurrentLanguage(language.id)}
						style={[
							styles.item,
							{
								backgroundColor:
									language.id === currentLanguage
										? colors.input
										: "transparent",
							},
						]}
					>
						<Text
							style={{
								fontSize: 18,
								color:
									language.id === currentLanguage
										? colors.primary
										: colors.text,
							}}
						>
							{language.name}
						</Text>
						{language.id === currentLanguage && (
							<Feather
								name="check"
								size={18}
								color={colors.primary}
							/>
						)}
					</CustomTouchableOpacity>
				))}
			</ScrollView>
		</ViewInsetTop>
	);
};

const languages = [
	{ id: 1, name: "English" },
	{ id: 2, name: "日本語" },
	{ id: 3, name: "Tiếng Việt " },
];

export default LanguageScreen;
