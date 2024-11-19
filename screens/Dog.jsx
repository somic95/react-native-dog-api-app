import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";

export default function Dog({ route, navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#7eacb5]">
      <Header title={route.params.breeds[0].name} navigation={navigation} />
      <ScrollView>
        <View>
          <View className="p-4">
            <Image
              source={{ uri: route.params.url }}
              className="w-full h-96 rounded-3xl"
            />
          </View>
          <View className="justify-center items-center p-4 m-4 rounded-md bg-[#fadfa1]">
            <View>
              <Text className="italic font-extrabold text-2xl text-[#c96868]">
                {route.params.breeds[0].name}
              </Text>
            </View>
            <View className="bg-white mt-4 p-4 border border-slate-300 w-full justify-center items-center rounded-lg">
              <Text className="italic text-slate-700">
                Weight : {route.params.breeds[0].weight.metric} KGs
              </Text>
              <Text className="italic text-slate-700">
                Height : {route.params.breeds[0].height.metric} CMs
              </Text>
              <Text className="italic text-slate-700">
                Life Spans : {route.params.breeds[0].life_span}
              </Text>
            </View>
            <View className="bg-white mt-4 p-4 border border-slate-300 w-full justify-center items-center rounded-lg">
              <Text className="italic text-slate-700">
                Temperament : {route.params.breeds[0].temperament}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
