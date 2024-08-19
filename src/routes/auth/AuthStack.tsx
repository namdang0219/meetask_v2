import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	CreateUserInfoScreen,
	ForgotPasswordScreen,
	LoginScreen,
	SignupScreen,
	UploadAvatarScreen,
	WalkThrought,
} from "screens/auth";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="WalkThrought" component={WalkThrought} />
			<Stack.Screen name="SignupScreen" component={SignupScreen} />
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen
				name="ForgotPasswordScreen"
				component={ForgotPasswordScreen}
			/>
			<Stack.Screen
				name="CreateUserInfoScreen"
				component={CreateUserInfoScreen}
			/>
			<Stack.Screen
				name="UploadAvatarScreen"
				component={UploadAvatarScreen}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
