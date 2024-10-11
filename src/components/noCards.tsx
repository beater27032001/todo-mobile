import { Image, Text, View } from "react-native";

export function NoCards() {
  return (
    <View>
      <View className="border-t border-cgray-400"></View>
      <View className="items-center top-12">
        <Image source={require("@/src/assets/clipboard.png")} />
        <Text className="top-4 text-cgray-300 text-center">
          Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
          itens a fazer
        </Text>
      </View>
    </View>
  );
}
