import { CustomText } from "@/shared/text-custom";
import { Feather } from "@expo/vector-icons";
import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FavoriteButton from "./favorite-button";
import { StarWarsCharacter } from "@/features/details/types/details-character";
interface props {
  info: StarWarsCharacter;
}

const CharacterItem = React.memo(({ info }: props) => {
  return (
    <TouchableOpacity>
      <View
        testID="character-item"
        className="flex m-5  gap-8 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400"
      >
        <View className="flex flex-row items-center justify-between">
          <CustomText className="text-2xl text-amber-500 font-bold dark:text-amber-400 flex-1 text-center">
            {info.name}
          </CustomText>
          <FavoriteButton characterName={info.name} />
        </View>
        <View className="gap-3">
          <View className="flex flex-row justify-between">
            <CustomText>
              <CustomText className="font-bold">Height:</CustomText>{" "}
              {info.height}
            </CustomText>
            <CustomText>
              <CustomText className="font-bold">Skin Color:</CustomText>{" "}
              {info.skin_color}
            </CustomText>
          </View>
          <View className="flex flex-row justify-between">
            <CustomText>
              <CustomText className="font-bold">Mass:</CustomText> {info.mass}
            </CustomText>
            <CustomText>
              <CustomText className="font-bold">Gender: </CustomText>
              {info.gender}
            </CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default CharacterItem;
