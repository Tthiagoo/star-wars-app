import { CustomText } from "@/shared/text-custom";
import React from "react";
import { ScrollView, View, Text, FlatList } from "react-native";
import MovieCard from "../components/movie-card";
import { StarWarsCharacter } from "../types/details-character";
import { useLocalSearchParams } from "expo-router";
import { useMovieList } from "../hooks/use-movie-list";

import { SkeletonMovieLoading } from "../components/skeleton-movie";
import { Button } from "@/shared/Button";
import { ButtonBack } from "@/shared/button-back";

/**
 * Details caracter selected
 * * In the expo, dynamic routes have access to route parameters
 * @returns void
 */
export default function DetailsViewModel() {
  const { info: infoCharacterSelected } = useLocalSearchParams(); // data source

  const data: StarWarsCharacter = JSON.parse(infoCharacterSelected);
  const { data: movies, error, isLoading } = useMovieList(data.films);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
      <ButtonBack />
      {/* Header Section */}
      <View className="bg-amber-500 p-5 rounded-md ">
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
      <View className=" p-4  ">
        <CustomText className="text-xl font-bold mb-4">Movies</CustomText>
        <FlatList
          data={movies}
          keyExtractor={(item, key) => item.title}
          renderItem={({ item, index }) => (
            <MovieCard key={index} movieInfo={item} />
          )}
          horizontal
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={<SkeletonMovieLoading />}
        />
      </View>
    </ScrollView>
  );
}
