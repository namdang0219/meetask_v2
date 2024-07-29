import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { primaryColor, primaryColorDark } from "utils/constants/ThemeColors";

export const useTintColor = () => {
	const [tintColor, setTintColor] = useState<string>();
	const scheme = useColorScheme();

	useEffect(() => {
		setTintColor(scheme === "light" ? primaryColor : primaryColorDark);
	}, [scheme]);

	return tintColor;
};
