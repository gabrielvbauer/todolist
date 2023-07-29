import { Text, View } from "react-native"
import { styles } from "./styles"
import EmptyListImage from "../../assets/emptyList.svg"

export function EmptyTaskList() {
  return (
    <View style={styles.container}>
      <EmptyListImage width={56} height={56} />
      <View>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.description}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
