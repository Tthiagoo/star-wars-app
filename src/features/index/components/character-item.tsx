import { CustomText } from "@/components/text-custom";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FavoriteButton from "./favorite-button";

export function CharacterItem({ item }) {
  return (
    <View
      testID="character-item"
      className="flex m-5  gap-8 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400"
    >
      <View className="flex flex-row items-center justify-between">
        <CustomText className="text-2xl text-amber-500 font-bold dark:text-amber-400 flex-1 text-center">
          {item.name}
        </CustomText>
        <FavoriteButton />
      </View>
      <View className="gap-3">
        <View className="flex flex-row justify-between">
          <CustomText>
            <CustomText className="font-bold">Height:</CustomText> {item.height}
          </CustomText>
          <CustomText>
            <CustomText className="font-bold">Skin Color:</CustomText>{" "}
            {item.skin_color}
          </CustomText>
        </View>
        <View className="flex flex-row justify-between">
          <CustomText>
            <CustomText className="font-bold">Mass:</CustomText> {item.mass}
          </CustomText>
          <CustomText>
            <CustomText className="font-bold">Gender: </CustomText>
            {item.gender}
          </CustomText>
        </View>
      </View>
    </View>
  );
}
