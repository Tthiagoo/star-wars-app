import { CustomText } from "@/components/text-custom";
import { MovieCard } from "@/features/details/components/movie-card";
import { StarWarsCharacter } from "@/features/details/types/details-character";
import DetailsViewModel from "@/features/details/views/details-view-model";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Details() {
  return <DetailsViewModel />;
}
