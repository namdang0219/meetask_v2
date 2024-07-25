import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkThrough from "screens/auth/WalkThrough";
import Login from "screens/auth/Login";
import Register from "screens/auth/Register";
import { View } from "react-native";
import { globalConstants } from "utils/constants/constant";
import CreateUserInfo from "screens/auth/CreateUserInfo";
import UploadAvatar from "screens/auth/UploadAvatar";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="WalkThrough" component={WalkThrough} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
			<Stack.Screen name="CreateUserInfo" component={CreateUserInfo} />
			<Stack.Screen name="UploadAvatar" component={UploadAvatar} />
		</Stack.Navigator>
	);
};

export default AuthStack;
