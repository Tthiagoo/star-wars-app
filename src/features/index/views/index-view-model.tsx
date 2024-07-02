import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

import { IPeopleListResponse } from "../types/people-list-types";

import { SkeletonLoading } from "../components/skeleton-loading";
import { useInfiniteScroll } from "../hooks/use-people-list-infinite";
import CharacterItem from "../components/character-item";
import { Link } from "expo-router";
import { CharacterList } from "../components/character-list";

export function IndexViewModel() {
  const {
    data: infoDataPeopleResponse,

    onEndReached,
    isFetchingNextPage,
  } = useInfiniteScroll<IPeopleListResponse>({
    key: ["people"],
  });

  return (
    <View className="flex items-center ">
      <Image
        contentFit="contain"
        source={require("../../../../assets/images/starwars.png")}
        style={{
          width: "35%",
          height: "35%",
          marginBottom: -35,
          marginTop: -60,
        }}
      />
      <Text className="text-black text-lg font-bold dark:text-white">
        May the force be with you!
      </Text>
      <View style={{ height: 480, marginTop: 15 }}>
        <CharacterList
          dataPeopleResponse={infoDataPeopleResponse}
          onEndReached={onEndReached}
          isFetchingNextPage={isFetchingNextPage}
        />
      </View>
    </View>
  );
}
