import { Theme } from "constants/color";

declare module "@react-navigation/native" {
  export function useTheme(): Theme;
}