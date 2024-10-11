import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { useTaskStore } from "../stores/task-store";

interface CardProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
}

export function Card({ task }: CardProps) {
  const { deleteTask, toggleTaskCompletion } = useTaskStore();
  return (
    <View className="bg-cgray-500 border border-cgray-400 rounded-lg flex-row items-center p-3 mb-2">
      <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
        <Feather
          name={task.completed ? "check-circle" : "circle"}
          size={24}
          color="#4EA8DE"
        />
      </TouchableOpacity>
      <Text
        className={`text-cgray-100 flex-1 mx-2 ${
          task.completed ? "line-through" : ""
        }`}
      >
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Feather name="trash" size={24} color="#4EA8DE" />
      </TouchableOpacity>
    </View>
  );
}
