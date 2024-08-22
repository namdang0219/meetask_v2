import { ThemeTypes } from "utils/theme/themeColors";

declare module "@react-navigation/native" {
  export function useTheme(): ThemeTypes;
}