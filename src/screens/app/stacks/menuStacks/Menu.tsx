import { View, Text } from "react-native";
import React from "react";
import { FullView } from "layouts";
import { globalConstants } from "utils/constants/constant";
import { Avatar } from "react-native-ui-lib";
import { ThemedText } from "components/themed";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CustomTouchableOpacity } from "components/customs";

const Menu = () => {
  const {colors} = useTheme()
  const {navigate} = useNavigation<any>()
	return (
		<FullView>
			<View style={{backgroundColor: colors.inputBackground, gap: 8}}>
				<CustomTouchableOpacity
        onPress={() => navigate('Profile')}
					style={{
						height: 86,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						paddingHorizontal: globalConstants.padding,
            backgroundColor: 'white',
					}}
				>
					<View
						style={{
							flexDirection: "row",
							gap: 20,
							alignItems: "center",
              flex:1
						}}
					>
						<Avatar
							size={65}
							animate
							source={{
								uri: "https://i.pinimg.com/564x/f8/b1/8c/f8b18cb33351da5f6ef7be3461ac12c6.jpg",
							}}
							label="avatar"
						/>
						<View style={{flex: 1}}>
							<ThemedText style={{fontSize: 26, fontWeight: '500', marginBottom:4}}>Nyamu</ThemedText>
							<ThemedText style={{color: colors.subText}}>meowcopter@gmail.com</ThemedText>
						</View>
					</View>
          <Entypo name="chevron-thin-right" size={24} color="gray" />
				</CustomTouchableOpacity>
        <View>

        </View>
			</View>
		</FullView>
	);
};

export default Menu;
