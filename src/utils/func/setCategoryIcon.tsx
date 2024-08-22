import { ComponentType } from "react";
import { IconComponentProps } from "utils/types/dataTypes";

export function setCategoryIcon(
	IconComponent: any,
	size: number,
	color: string
) {
	return <IconComponent size={size} color={color} />;
}
