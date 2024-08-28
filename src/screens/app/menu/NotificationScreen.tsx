import { useTheme } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/custom";
import { Header } from "components/header";
import { ViewInsetTop } from "components/view";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Global from "utils/constants/Global";

const NotificationScreen = () => {
	const { colors } = useTheme();

	return (
		<ViewInsetTop>
			<Header type="titleWithBack" title="通知"></Header>
			<FlatList
				data={Array(15).fill(null)}
				renderItem={({ index }) => (
					<CustomTouchableOpacity
						style={{
							flexDirection: "row",
							gap: 14,
							paddingHorizontal: Global.padding,
							backgroundColor:
								index % 2 === 0
									? "white"
									: colors.input,
							paddingVertical: 10,
						}}
					>
						<Image
							source={{
								uri: "https://i.pinimg.com/564x/56/f0/2e/56f02e7de8f32009b8b412462439580b.jpg",
							}}
							style={{
								width: 64,
								height: 64,
								borderRadius: 1000,
								objectFit: "cover",
							}}
						></Image>

						<View style={{ flex: 1 }}>
							<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
								<Text
									style={{
										fontWeight: "500",
										fontSize: 16,
										marginBottom: 2,
										color: colors.text,
									}}
								>
									Mai Ngoc
								</Text>
                <Text style={{color: 'gray', fontSize: 12}}>5分前</Text>
							</View>
							<Text numberOfLines={2} style={{lineHeight: 20, color: colors.text}}>
								Đồng thời, Ủy ban Thường vụ Quốc hội sẽ cho ý
								kiến về dự thảo Kế hoạch giám sát và đề cương
								báo cáo của Đoàn giám sát của Ủy ban Thường vụ
								Quốc hội về “Việc thực hiện chính sách, pháp
								luật về phát triển và sử dụng nguồn nhân lực đáp
								ứng yêu cầu phát triển kinh tế - xã hội, nhất là
								nguồn nhân lực chất lượng cao”.
							</Text>
						</View>
					</CustomTouchableOpacity>
				)}
			/>
		</ViewInsetTop>
	);
};

const styles = StyleSheet.create({});

export default NotificationScreen;
