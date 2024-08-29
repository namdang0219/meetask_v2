import { View, Text, ViewProps } from "react-native";
import React from "react";
import { LabelSmall } from "components/label";

type FieldSmallProps = ViewProps & {
	label: string;
};

const FieldSmall = ({ label = 'label', children, ...props }: FieldSmallProps) => {
	return (
		<View style={{gap: 10}} {...props}>
			{label && <LabelSmall>{label}</LabelSmall>}
			{children}
		</View>
	);
};

export default FieldSmall;
