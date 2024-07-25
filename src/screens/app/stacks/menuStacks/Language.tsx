import { Text, View } from "react-native";
import React, { useState } from "react";
import { CustomTouchableOpacity } from "components/customs";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { SafeView } from "layouts";

const Language = () => {
	const [currentLanguage, setCurrentLanguage] = useState<string>("en");
	const { colors } = useTheme();
	return (
		<View style={{ paddingBottom: 0 }}>
			<View style={{ paddingTop: 10 }}>
				{languages.map((language, index) => (
					<CustomTouchableOpacity
						key={language.code}
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							height: 50,
							paddingHorizontal: 20,
							borderBottomColor: colors.bottomIconDefault,
							borderBottomWidth:
								index == languages.length - 1 ? 0 : 0.2,
						}}
						onPress={() => setCurrentLanguage(language.code)}
					>
						<Text
							style={{
								fontSize: 18,
								color:
									currentLanguage == language.code
										? colors.primary
										: colors.text,
							}}
						>
							{language.language}
						</Text>
						{currentLanguage == language.code && (
							<Feather
								name="check"
								size={22}
								color={
									currentLanguage == language.code
										? colors.primary
										: colors.text
								}
							/>
						)}
					</CustomTouchableOpacity>
				))}
			</View>
		</View>
	);
};

const languages = [
	{
		code: "en",
		language: "English",
	},
	{
		code: "jp",
		language: "Japanese",
	},
	{
		code: "vi",
		language: "Vietnamese",
	},
];

export default Language;
