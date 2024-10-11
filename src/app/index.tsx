import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Card } from "../components/card";
import { NoCards } from "../components/noCards";
import { useState } from "react";
import { useTaskStore } from "../stores/task-store";

export default function Index() {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, addTask, getCompletedCount, getCreatedCount } = useTaskStore();


  function handleAddTask(title: string) {
    if (title.trim() === "") {
      Alert.alert("Adicionar tarefa", "Informe o título da tarefa");
      return;
    }

    addTask(title);
    setTaskTitle("");
  }

  return (
    <View className="flex-1 mt-20">
      <View className="items-center gap-10">
        <Image source={require("@/src/assets/logo.png")} />
        <View className="flex-row items-center gap-1 px-6 relative z-10">
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.zinc[400]}
            className="h-14 bg-cgray-500 rounded-md px-4 flex-1 text-cgray-100 border border-cgray-700 focus:border-cpurple-dark"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <TouchableOpacity
            className="bg-cblue-dark p-5 rounded-md"
            activeOpacity={0.7}
            onPress={() => handleAddTask(taskTitle)}
          >
            <Feather name="plus-circle" size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-cgray-600 flex-1 absolute top-28 left-0 right-0 z-0 h-full">
        <View className="flex-row justify-between w-full px-6 mt-14">
          <View className="flex-row items-center gap-2">
            <Text className="text-cblue-light font-bold">Criadas</Text>
            <Text className="text-cgray-100 bg-cgray-400 px-2 py-0.5 rounded-full">
              {getCreatedCount()}
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Text className="text-cpurple-light font-bold">Concluídas</Text>
            <Text className="text-cgray-100  bg-cgray-400 px-2 py-0.5 rounded-full">
              {getCompletedCount()}
            </Text>
          </View>
        </View>

        <View className="px-6 mt-5">
          {tasks.length > 0 ? (
            <FlatList
              data={tasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Card task={item} />}
            />
          ) : (
            <NoCards />
          )}
        </View>
      </View>
    </View>
  );
}
