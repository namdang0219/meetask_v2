import { View } from "react-native";
import React from "react";
import { globalConstants } from "utils/constants/constant";
import { Avatar } from "react-native-ui-lib";
import { ThemedText, ThemedView } from "components/themed";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/customs";
import Svg from "react-native-svg";
import { Path } from "react-native-svg";

const Menu = () => {
	const { colors } = useTheme();   
	return (
		<ThemedView>
			<View style={{ backgroundColor: colors.inputBackground, gap: 8 }}>
				<MenuProfile />
				<MenuItem />
			</View>
		</ThemedView>
	);
};

const MenuItem = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();
	return (
		<>
			{menuItems.map((list, i) => (
				<View key={i}>
					{list.map((item, index) => (
						<CustomTouchableOpacity
							key={item.id}
							onPress={() => navigate(item.navigate)}
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
								paddingHorizontal: globalConstants.padding + 6,
								paddingVertical: 14,
								borderBottomColor: colors.inputBackground,
								borderBottomWidth:
									index === list.length - 1 ? 0 : 1,
								backgroundColor: "white",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 14,
								}}
							>
								{item.icon}
								<ThemedText
									style={{
										fontSize: 16,
										fontWeight: "500",
										color: "black",
									}}
								>
									{item.name}
								</ThemedText>
							</View>
							<View>
								<Entypo
									name="chevron-thin-right"
									size={24}
									color="gray"
								/>
							</View>
						</CustomTouchableOpacity>
					))}
				</View>
			))}
		</>
	);
};

const MenuProfile = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();

	return (
		<CustomTouchableOpacity
			onPress={() => navigate("Profile")}
			style={{
				height: 86,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				paddingHorizontal: globalConstants.padding,
				backgroundColor: "white",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					gap: 12,
					alignItems: "center",
					flex: 1,
				}}
			>
				<Avatar
					size={68}
					animate
					source={{
						uri: "https://i.pinimg.com/564x/f8/b1/8c/f8b18cb33351da5f6ef7be3461ac12c6.jpg",
					}}
					label="avatar"
				/>
				<View style={{ flex: 1 }}>
					<ThemedText
						style={{
							fontSize: 26,
							fontWeight: "500",
							marginBottom: 4,
						}}
					>
						Nyamu
					</ThemedText>
					<ThemedText style={{ color: colors.subText }}>
						meowcopter@gmail.com
					</ThemedText>
				</View>
			</View>
			<Entypo name="chevron-thin-right" size={24} color="gray" />
		</CustomTouchableOpacity>
	);
};

const menuItems = [
	[
		{
			id: 1,
			name: "通知",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 256 256">
					<Path
						fill="gray"
						d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0m16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36m-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20"
					></Path>
				</Svg>
			),
			navigate: "Notification",
		},
		{
			id: 2,
			name: "言語",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 512 512">
					<Path
						fill="none"
						stroke="gray"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={32}
						d="M48 112h288M192 64v48m80 336l96-224l96 224m-162.5-64h133M281.3 112S257 206 199 277S80 384 80 384"
					></Path>
					<Path
						fill="none"
						stroke="gray"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={32}
						d="M256 336s-35-27-72-75s-56-85-56-85"
					></Path>
				</Svg>
			),
			navigate: "Language",
		},
		{
			id: 3,
			name: "設定",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 24 24">
					<Path
						fill="none"
						stroke="gray"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.55}
						d="M20.79 9.152C21.598 10.542 22 11.237 22 12s-.403 1.458-1.21 2.848l-1.923 3.316c-.803 1.384-1.205 2.076-1.865 2.456s-1.462.38-3.065.38h-3.874c-1.603 0-2.405 0-3.065-.38s-1.062-1.072-1.865-2.456L3.21 14.848C2.403 13.458 2 12.763 2 12s.403-1.458 1.21-2.848l1.923-3.316C5.936 4.452 6.338 3.76 6.998 3.38S8.46 3 10.063 3h3.874c1.603 0 2.405 0 3.065.38s1.062 1.072 1.865 2.456zM9 8l6 8"
						color="currentColor"
					></Path>
				</Svg>
			),
			navigate: "Setting",
		},
	],
	[
		{
			id: 1,
			name: "アバウト",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 24 24">
					<Path
						fill="gray"
						d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94"
					></Path>
				</Svg>
			),
			navigate: "About",
		},
		{
			id: 2,
			name: "プライバシー",
			icon: (
				<Svg width={28} height={28} viewBox="0 0 24 24">
					<Path
						fill="gray"
						d="M11.5 16.23h1v-5.653h-1zM12 9q.262 0 .439-.177q.176-.177.176-.438q0-.262-.177-.439T12 7.77t-.438.177t-.177.439t.177.438T12 9m0 11.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m0-1.062q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.88"
					></Path>
				</Svg>
			),
			navigate: "Privacy",
		},
		{
			id: 3,
			name: "ヘルプ",
			icon: (
				<Svg
					xmlns="http://www.w3.org/2000/svg"
					width={28}
					height={28}
					viewBox="0 0 24 24"
				>
					<Path
						fill="gray"
						d="M12.028 17.23q.332 0 .56-.228t.228-.56t-.23-.56q-.228-.228-.56-.228t-.56.229t-.227.56q0 .332.228.56q.23.228.561.228m-.517-3.312h.966q.038-.652.245-1.06q.207-.407.851-1.04q.67-.669.996-1.199t.327-1.226q0-1.182-.83-1.884q-.831-.702-1.966-.702q-1.079 0-1.832.586q-.753.587-1.103 1.348l.92.381q.24-.546.687-.965q.447-.42 1.29-.42q.972 0 1.42.534q.449.534.449 1.174q0 .52-.281.928q-.28.409-.73.822q-.87.802-1.14 1.36t-.269 1.363M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
					></Path>
				</Svg>
			),
			navigate: "Help",
		},
	],
];

export default Menu;
