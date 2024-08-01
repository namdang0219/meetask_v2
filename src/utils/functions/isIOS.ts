import { Platform } from "react-native";

export function isIOS (): boolean {
  return Platform.OS === 'ios';
}