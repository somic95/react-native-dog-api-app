import { View, Text } from "react-native";
import React from "react";

export default function HomeHeader({ title }) {
  return (
    <View className="bg-[#C96868] p-4">
      <Text className="uppercase font-poppins-regular text-xl font-bold text-center text-[#FADFA1]">
        {title}
      </Text>
    </View>
  );
}
