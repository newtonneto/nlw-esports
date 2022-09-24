import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 16,
  },
  content: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    height: 64,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "red",
    marginRight: 16,
  },
  username: {
    color: THEME.COLORS.CAPTION_300,
  },
});
