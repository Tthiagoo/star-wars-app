import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Image } from "expo-image";
import CharacterList from "../components/character-list";
import { ISimpleCharacter } from "../types/people-list-types";

export default function IndexViewModel() {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const mockCharacters: ISimpleCharacter[] = [
    {
      name: "Luke Skywalker",
      gender: "male",
      height: "177",
      favorite: true,
    },
    {
      name: "Leia Organa",
      gender: "female",
      height: "177",

      favorite: false,
    },
  ];
  return (
    <View className="flex items-center ">
      <Image
        contentFit="contain"
        source={require("../../../../assets/images/starwars.png")}
        style={{
          width: "35%",
          height: "35%",
          marginBottom: -20,
          marginTop: -20,
        }}
        placeholder={{ blurhash }}
      />
      <Text className="text-black text-lg font-bold dark:text-white">
        May the force be with you!
      </Text>
      <CharacterList characters={mockCharacters} />
    </View>
  );
}
