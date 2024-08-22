import { DefaultTheme } from "@react-navigation/native";

export const lightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		text: "cyan",
	},
};

export const darkTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		text: "red",
	},
};

export type Theme = typeof lightTheme;
