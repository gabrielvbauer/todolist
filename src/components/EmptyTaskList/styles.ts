import { StyleSheet } from "react-native"
import { colors, fonts } from "../../styles/global"

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    borderTopWidth: 1,
    borderColor: "#333333",
  },
  title: {
    color: colors.base.gray300,
    fontSize: fonts.sizes.md,
    fontFamily: fonts.family.bold,
    lineHeight: fonts.lineHeights.md,
    textAlign: "center",
  },
  description: {
    color: colors.base.gray300,
    fontSize: fonts.sizes.md,
    fontFamily: fonts.family.regular,
    lineHeight: fonts.lineHeights.md,
    textAlign: "center",
  },
})
