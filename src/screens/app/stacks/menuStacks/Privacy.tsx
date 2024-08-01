import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
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
    あなたのプライバシーは私たちにとって重要です。Brainstormingは、お客様から収集する情報に関してプライバシーを尊重する方針を採っています。
    これは、私たちの<Text style={styles.contentHighlight}>ウェブサイト</Text>や、私たちが所有および運営する他のサイトに適用されます。
    サービスを提供するために本当に必要な場合にのみ、個人情報を求めます。公正かつ合法的な手段で、お客様の知識と同意のもとで収集します。
    また、なぜそれを収集するのか、そしてどのように使用するのかをお知らせします。
    要求されたサービスを提供するために必要な期間のみ収集した情報を保持します。
    保管するデータは、紛失や盗難、無許可のアクセス、開示、複製、使用、改ざんを防ぐために、商業的に受け入れられる手段で保護します。
    法律で要求される場合を除き、個人を特定できる情報を公にまたは第三者と共有することはありません。
</Text>

			<Image source={logo} style={styles.image}></Image>
			<Text style={styles.content}>
			あなたのプライバシーは私たちにとって重要です。Brainstormingは、私たちが所有および運営するウェブサイトやその他のサイトを通じて収集する情報に関して、お客様のプライバシーを尊重する方針を採っています。サービスを提供するために本当に必要な場合にのみ、個人情報を求めます。公正かつ合法的な手段で、お客様の知識と同意のもとで収集します。また、なぜそれを収集するのか、そしてどのように使用するのかをお知らせします。要求されたサービスを提供するために必要な期間のみ収集した情報を保持します。ï
			</Text>
      <View style={{height: 20}}></View>
		</ScrollView>
	);
};

export default Privacy;
