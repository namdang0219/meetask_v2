import { CustomColorType } from "utils/types";

declare module "@react-navigation/native" {
	export function useTheme(): CustomColorType;
}
