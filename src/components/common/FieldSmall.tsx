import { View, Text, ViewProps } from "react-native";
import React from "react";
import { LabelSmall } from "components/label";
import { useTheme } from "@react-navigation/native";

type FieldSmallProps = ViewProps & {
	label: string;
};

const FieldSmall = ({
	label = "label",
	children,
	...props
}: FieldSmallProps) => {
	const { colors } = useTheme();

	return (
		<View style={{ gap: 10, backgroundColor: colors.background }} {...props}>
			{label && <LabelSmall>{label}</LabelSmall>}
			{children}
		</View>
	);
};

export default FieldSmall;
