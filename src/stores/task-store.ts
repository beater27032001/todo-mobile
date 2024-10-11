import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  getCreatedCount: () => number;
  getCompletedCount: () => number;
}

export const useTaskStore = create(
  persist<TaskState>(
    (set, get) => ({
      tasks: [],
      addTask: (title: string) =>
        set((state) => {
          const newTask: Task = {
            id: Date.now().toString(),
            title,
            completed: false,
          };
          console.log("Adding task:", newTask);
          return { tasks: [...state.tasks, newTask] };
        }),
      deleteTask: (id: string) =>
        set((state) => {
          console.log("Deleting task with id:", id);
          return { tasks: state.tasks.filter((task) => task.id !== id) };
        }),
      toggleTaskCompletion: (id: string) =>
        set((state) => {
          console.log("Toggling completion for task with id:", id);
          return {
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
          };
        }),
      getCreatedCount: () => {
        return get().tasks.length;
      },

      // Função para contar tarefas concluídas
      getCompletedCount: () => {
        return get().tasks.filter((task) => task.completed).length;
      },
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
