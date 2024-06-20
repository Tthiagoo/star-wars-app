import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Image } from "expo-image";
import CharacterList from "../components/character-list";
import { ISimpleCharacter } from "../types/people-list-types";
import usePeopleList from "../hooks/use-people-list";
import { blurhash } from "@/constants/blurhash";
import { CustomText } from "@/components/text-custom";
import { SkeletonLoading } from "../components/skeleton-loading";

export default function IndexViewModel() {
  const { data, error, isLoading } = usePeopleList();

  return (
    <View className="flex items-center ">
      <Image
        contentFit="contain"
        source={require("../../../../assets/images/starwars.png")}
        style={{
          width: "35%",
          height: "35%",
          marginBottom: -60,
          marginTop: -60,
        }}
        placeholder={{ blurhash }}
      />
      <Text className="text-black text-lg font-bold dark:text-white">
        May the force be with you!
      </Text>
      <View style={{ height: 480, marginTop: 15 }}>
        {isLoading && <SkeletonLoading />}
        <CharacterList characters={data!} />
      </View>
    </View>
  );
}
