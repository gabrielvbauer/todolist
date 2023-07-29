import { View, Text } from "react-native"
import LogoImage from "../../assets/logo.svg"
import { styles } from "./styles"

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <LogoImage width={110} height={32} />
    </View>
  )
}
