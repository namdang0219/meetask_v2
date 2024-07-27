import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	useWindowDimensions,
} from "react-native";
import React from "react";
import { globalConstants } from "utils/constants/constant";
import { useTheme } from "@react-navigation/native";

const Privacy = () => {
	const { colors } = useTheme();

	const logo = require("../../../../../assets/images/meetask_logo.png");

	const styles = StyleSheet.create({
		container: {
			paddingHorizontal: globalConstants.padding,
			paddingTop: 8,
		},
		content: { fontSize: 16, lineHeight: 28, textAlign: 'center' },
		contentHighlight: { color: colors.primary, fontWeight: "500" },
		image: {
			width: 512 / 3,
			marginHorizontal: "auto",
			height: 266 /3,
			marginVertical: 30,

		},
	});

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.content}>
				Your privacy is important to us. It is Brainstorming's policy to
				respect your privacy regarding any information we may collect
				from you across our{" "}
				<Text style={styles.contentHighlight}>website</Text>, and other
				sites we own and operate. We only ask for personal information
				when we truly need it to provide a service to you. We collect it
				by fair and lawful means, with your knowledge and consent. We
				also let you know why we’re collecting it and how it will be
				used. We only retain collected information for as long as
				necessary to provide you with your requested service. What data
				we store, we’ll protect within commercially acceptable means to
				prevent loss and theft, as well as unauthorized access,
				disclosure, copying, use or modification. We don’t share any
				personally identifying information publicly or with
				third-parties, except when required to by law.
			</Text>
			<Image source={logo} style={styles.image}></Image>
			<Text style={styles.content}>
				Your privacy is important to us. It is Brainstorming's policy to
				respect your privacy regarding any information we may collect
				from you across our website, and other sites we own and operate.
				We only ask for personal information when we truly need it to
				provide a service to you. We collect it by fair and lawful
				means, with your knowledge and consent. We also let you know why
				we’re collecting it and how it will be used. We only retain
				collected information for as long as necessary to provide you
				with your requested service.
			</Text>
      <View style={{height: 20}}></View>
		</ScrollView>
	);
};

export default Privacy;
