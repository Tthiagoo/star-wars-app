import { CustomText } from "@/components/text-custom";
import { MovieCard } from "@/features/details/components/movie-card";
import { StarWarsCharacter } from "@/features/details/types/details-character";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Details() {
  const { info } = useLocalSearchParams();

  const data: StarWarsCharacter = JSON.parse(info);
  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      {/* Header Section */}
      <View className="bg-amber-500 p-5 rounded-md">
        <Text className="text-white text-4xl font-bold text-center">
          {data.name}
        </Text>
      </View>

      {/* General Details Section */}
      <View className="border-b-2 border-amber-500 p-5 rounded-lg  mb-4">
        <CustomText className="text-xl font-bold mb-4">
          General Details
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Height:</CustomText> {data.height}{" "}
          cm
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Mass:</CustomText> {data.mass} kg
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Hair Color:</CustomText>{" "}
          {data.hair_color}
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Skin Color:</CustomText>{" "}
          {data.skin_color}
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Eye Color:</CustomText>{" "}
          {data.eye_color}
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Birth Year:</CustomText>{" "}
          {data.birth_year}
        </CustomText>
        <CustomText className="mb-2">
          <CustomText className="font-bold">Gender:</CustomText> {data.gender}
        </CustomText>
      </View>

      {/* Films Section */}
      <View className=" p-5 rounded-lg  mb-4">
        <CustomText className="text-xl font-bold mb-4">Movies</CustomText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.films.map((film, index) => (
            <MovieCard key={index} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
