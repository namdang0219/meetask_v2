import { CustomTouchableOpacity } from "components/custom";
import { Header } from "components/header";
import { ViewFull } from "components/view";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Global from "utils/constants/Global";

const PrivacyScreen = () => {
	return (
		<ViewFull>
			<Header type="titleWithBack" title="プライバシー" />
			<ScrollView style={{ paddingHorizontal: Global.padding }}>
				{privacies.map((privacy) => (
					<PrivacyItem
						key={privacy.title}
						item={privacy}
					></PrivacyItem>
				))}
			</ScrollView>
		</ViewFull>
	);
};

const PrivacyItem = ({
	item: { title, content },
}: {
	item: { title: string; content: any };
}) => {
	return (
		<View style={{ marginBottom: 10 }}>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "600",
					marginBottom: 2,
				}}
			>
				{title}
			</Text>
			<Text style={{ lineHeight: 18 }}>{content}</Text>
		</View>
	);
};

const privacies = [
	{
		title: "App privacy details on the App Store",
		content: (
			<>
				The App Store helps people better understand an app's privacy
				practices before they download the app on any Apple platform. On
				each app's product page, users can learn about some of the data
				types the app may collect, and whether that data is linked to
				them or used to track them. You'll need to provide information
				about your app's privacy practices, including the practices of
				third-party partners whose code you integrate into your app, in
				App Store Connect. This information is required to submit new
				apps and app updates to the App Store.
			</>
		),
	},
	{
		title: "Answering app privacy questions",
		content: (
			<>
				As you get ready to select your answers from the options
				presented in App Store Connect, keep in mind: You need to
				identify all of the data you or your third-party partners
				collect, unless the data meets all of the criteria for optional
				disclosure listed below. Your app's privacy practices should
				follow the App Review Guidelines and all applicable laws. You’re
				responsible for keeping your responses accurate and up to date.
				If your practices change, update your responses in App Store
				Connect. You may update your answers at any time, and you do not
				need to submit an app update in order to change your answers.
			</>
		),
	},
	{
		title: "Data collection",
		content: (
			<>
				Data linked to the user Tracking Privacy links Additional
				guidance What’s new An important part of submitting your app to
				the App Store is explaining how your app handles user data. Two
				new updates make it easier to accurately provide Privacy
				Nutrition Labels and improve the integrity of the software
				supply chain: signatures for third-party SDKs and privacy
				manifests. In addition, we’re adding more data type options to
				use in your Privacy Nutrition Label when describing what types
				of data your app collects. Read more Watch the latest videos
				Answering app privacy questions As you get ready to select your
				answers from the options presented in App Store Connect, keep in
				mind: You need to identify all of the data you or your
				third-party partners collect, unless the data meets all of the
			</>
		),
	},
	{
		title: "Tracking",
		content: (
			<>
				Privacy links Additional guidance What’s new An important part
				of submitting your app to the App Store is explaining how your
				app handles user data. Two new updates make it easier to
				accurately provide Privacy Nutrition Labels and improve the
				integrity of the software supply chain: signatures for
				third-party SDKs and privacy manifests. In addition, we’re
				adding more data type options to use in your Privacy Nutrition
				Label when describing what types of data your app collects. Read
				more Watch the latest videos Answering app privacy questions As
				you get ready to select your answers from the options presented
				in App Store Connect, keep in mind: You need to identify all of
				the data you or your third-party partners collect, unless the
				data meets all of the criteria for optional disclosure listed
				below. Your app’s privacy practices should follow the App Review
				Guidelines and all applicable laws. You’re responsible for
				keeping your responses accurate and up to date. If your
				practices change, update your responses in App Store Connect.
				You may update your answers at any time, and you do not need to
				submit an app update in order to change your answers. Account
				Holders, Admins, and App Managers can learn how to enter their
				responses in App Store Connect. Data collection The purpose of
				the label is to help your customers understand what data is
			</>
		),
	},
];

export default PrivacyScreen;
