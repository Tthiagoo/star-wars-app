import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";

import { IPeopleListResponse } from "../types/people-list-types";

import { blurhash } from "@/constants/blurhash";

import {
  SkeletonLoading,
  SkeletonLoadingUnit,
} from "../components/skeleton-loading";
import { useInfiniteScroll } from "../hooks/use-people-list-infinite";
import CharacterItem from "../components/character-item";
import { Link } from "expo-router";

export function IndexViewModel() {
  const {
    data: dataInifinite,

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
        <FlatList
          data={dataInifinite}
          onEndReached={onEndReached}
          initialNumToRender={10}
          removeClippedSubviews={true}
          keyExtractor={(item, key) => item.name}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/details/[info]",
                params: { info: JSON.stringify(item) }, // go to the next page with params info character
              }}
              asChild
            >
              <TouchableOpacity>
                <CharacterItem info={item} />
              </TouchableOpacity>
            </Link>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={<SkeletonLoading />}
          ListFooterComponent={
            <View>{isFetchingNextPage && <SkeletonLoading />}</View>
          }
        />
      </View>
    </View>
  );
}
