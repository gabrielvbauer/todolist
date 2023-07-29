import { useState, useEffect } from "react"
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"
import { colors } from "../../styles/global"
import Feather from "@expo/vector-icons/Feather"
import { Task, ITask } from "../../components/Task"
import { EmptyTaskList } from "../../components/EmptyTaskList"

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [task, setTask] = useState("")

  function handleAddNewTask() {
    if (!task) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime().toString(),
      description: task,
      isCompleted: false,
    }

    setTasks((state) => [...state, newTask])
    setTask("")
  }

  function handleRemoveTask(id: string) {
    const taskListWithoutTaskToRemove = tasks.filter((task) => {
      return task.id !== id
    })

    setTasks(taskListWithoutTaskToRemove)
  }

  function handleToggleTaskCompletion(id: string) {
    const taskToEditIndex = tasks.findIndex((task) => {
      return task.id === id
    })

    if (!!taskToEditIndex) {
      return
    }

    const newTasksLists = [...tasks]

    newTasksLists[taskToEditIndex].isCompleted =
      !newTasksLists[taskToEditIndex].isCompleted

    setTasks(newTasksLists)
  }

  function countCompletedTasks() {
    return tasks.filter((task) => task.isCompleted).length
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.newTaskContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.base.gray300}
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity
            style={styles.newTaskButton}
            disabled={!task}
            onPress={handleAddNewTask}
          >
            <Text>
              <Feather
                name="plus-circle"
                color={colors.base.gray100}
                size={16}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taskListContainer}>
          <View style={styles.taskListHeader}>
            <View style={styles.tasksInfo}>
              <Text style={styles.created}>Criadas</Text>
              <Text style={styles.badge}>{tasks.length}</Text>
            </View>
            <View style={styles.tasksInfo}>
              <Text style={styles.finished}>Concluídas</Text>
              <Text style={styles.badge}>{countCompletedTasks()}</Text>
            </View>
          </View>

          <FlatList
            data={tasks}
            style={styles.tasklist}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
            renderItem={({ item }) => (
              <Task
                task={item}
                onComplete={handleToggleTaskCompletion}
                onRemove={handleRemoveTask}
              />
            )}
            ListEmptyComponent={() => <EmptyTaskList />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
