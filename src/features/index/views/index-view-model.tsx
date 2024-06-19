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
      skin_color: "white",
      mass: "77",
      favorite: true,
    },
    {
      name: "Leia Organa",
      skin_color: "white",
      gender: "female",
      height: "177",
      mass: "78",
      favorite: false,
    },
    {
      name: "Leia Organa",
      skin_color: "white",
      gender: "female",
      height: "177",
      mass: "78",
      favorite: false,
    },
    {
      name: "Leia Organa",
      skin_color: "white",
      gender: "female",
      height: "177",
      mass: "78",
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
          marginBottom: -60,
          marginTop: -60,
        }}
        placeholder={{ blurhash }}
      />
      <Text className="text-black text-lg font-bold dark:text-white">
        May the force be with you!
      </Text>
      <View style={{ height: 480, marginTop: 15 }}>
        <CharacterList characters={mockCharacters} />
      </View>
    </View>
  );
}
