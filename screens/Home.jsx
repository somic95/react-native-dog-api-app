import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  Image,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { API_KEY } from "../data";

export default function Home({ navigation }) {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function getDogs() {
    setIsLoading(true);

    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5",
      requestOptions
    );
    const data = await res.json();
    setDogs(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getDogs();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getDogs().then(() => {
      setTimeout(() => {
        setRefreshing(false);
      }, 100);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#7EACB5]">
      <HomeHeader title="The Dog Data App" />
      <ScrollView
        className="p-4"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          dogs.map((dog) => (
            <Pressable
              key={dog.id}
              className="p-4 rounded-lg border border-[#FADFA1] mb-4 bg-[#fff4ea]"
              onPress={() => navigation.navigate("Dog", dog)}
            >
              <Image
                source={{ uri: dog.url }}
                className="w-full h-64 object-top object-cover mb-4"
              />
              {dog.breeds.map((breed, index) => (
                <Text
                  key={index}
                  className="font-bold text-lg text-[#C96868] text-center"
                >
                  {breed.name}
                </Text>
              ))}
            </Pressable>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
