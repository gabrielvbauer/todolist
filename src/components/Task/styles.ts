import { StyleSheet } from "react-native"
import { colors, fonts } from "../../styles/global"

export const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    alignItems: "center",
    backgroundColor: colors.base.gray500,
    borderWidth: 1,
    borderColor: colors.base.gray400,
    borderRadius: 8,
  },
  completedTask: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    alignItems: "center",
    backgroundColor: colors.base.gray500,
    borderWidth: 1,
    borderColor: colors.base.gray500,
    borderRadius: 8,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 999,
    borderColor: colors.product.blue,
  },
  taskDescription: {
    color: colors.base.gray100,
    fontSize: fonts.sizes.md,
    fontFamily: fonts.family.regular,
    lineHeight: fonts.lineHeights.md,
    flex: 1,
  },
  completedTaskDescription: {
    color: colors.base.gray300,
    fontSize: fonts.sizes.md,
    fontFamily: fonts.family.regular,
    lineHeight: fonts.lineHeights.md,
    flex: 1,
    textDecorationLine: "line-through",
  },
  removeTaskButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
})
