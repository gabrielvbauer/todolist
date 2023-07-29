import { StyleSheet } from "react-native"
import { colors, fonts } from "../../styles/global"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.base.gray600,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  newTaskContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: -28,
  },
  textInput: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.base.gray700,
    backgroundColor: colors.base.gray500,
    color: colors.base.gray100,

    fontSize: fonts.sizes.lg,
    lineHeight: fonts.lineHeights.lg,
    fontFamily: fonts.family.regular,
  },
  newTaskButton: {
    width: 52,
    height: 52,
    backgroundColor: colors.product.blueDark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  taskListContainer: {
    marginTop: 32,
  },
  taskListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasksInfo: {
    flexDirection: "row",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: colors.base.gray400,
    borderRadius: 999,
    color: colors.base.gray200,
    fontFamily: fonts.family.bold,
    fontSize: fonts.sizes.sm,
  },
  created: {
    fontSize: fonts.sizes.md,
    color: colors.product.blue,
    fontFamily: fonts.family.bold,
  },
  finished: {
    fontSize: fonts.sizes.md,
    color: colors.product.purple,
    fontFamily: fonts.family.bold,
  },
  tasklist: {
    marginTop: 20,
  },
  listSeparator: {
    marginBottom: 8,
  },
})
