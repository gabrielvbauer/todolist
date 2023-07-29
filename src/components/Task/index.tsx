import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import Feather from "@expo/vector-icons/Feather"
import Checkbox from "expo-checkbox"
import { colors } from "../../styles/global"

export interface ITask {
  id: string
  description: string
  isCompleted: boolean
}

interface TaskProps {
  task: ITask
  onComplete: (id: string) => void
  onRemove: (id: string) => void
}

export function Task({
  task: { id, description, isCompleted },
  onComplete,
  onRemove,
}: TaskProps) {
  return (
    <View style={isCompleted ? styles.completedTask : styles.task}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => onComplete(id)}
      >
        <Checkbox
          style={styles.checkbox}
          disabled={false}
          value={isCompleted}
          color={isCompleted ? colors.product.purple : undefined}
          onValueChange={() => onComplete(id)}
        />
      </TouchableOpacity>
      <Text
        style={
          isCompleted ? styles.completedTaskDescription : styles.taskDescription
        }
      >
        {description}
      </Text>
      <TouchableOpacity
        style={styles.removeTaskButton}
        onPress={() => onRemove(id)}
      >
        <Feather name="trash" color={colors.base.gray300} size={14} />
      </TouchableOpacity>
    </View>
  )
}
