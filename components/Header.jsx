import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  return (
    <View className="bg-[#C96868] p-4 flex-row items-center gap-x-3">
      <Entypo
        name="chevron-left"
        size={28}
        color="#FADFA1"
        onPress={() => navigation.goBack()}
      />
      <Text className="uppercase text-base font-bold text-center text-[#FADFA1]">
        {title}
      </Text>
    </View>
  );
}
