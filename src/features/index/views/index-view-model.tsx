import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import CharacterList from "../components/character-list";
import { ICharacter, ISimpleCharacter } from "../types/people-list-types";
import usePeopleList from "../hooks/use-people-list";
import { blurhash } from "@/constants/blurhash";
import { CustomText } from "@/components/text-custom";
import {
  SkeletonLoading,
  SkeletonLoadingUnit,
} from "../components/skeleton-loading";
import { useInfiniteScroll } from "../hooks/use-people-list-infinite";
import CharacterItem from "../components/character-item";
import { Link } from "expo-router";
type TFilters = {
  search: string;
};

export function IndexViewModel() {
  // const { data, error, isLoading } = usePeopleList();

  const {
    data: dataInifinite,

    onEndReached,
    isFetchingNextPage,
  } = useInfiniteScroll<ICharacter>({
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
        placeholder={{ blurhash }}
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
          renderItem={({ item, index }) => (
            <Link
              href={{
                pathname: "/details/[info]",
                params: { info: JSON.stringify(item) },
              }}
              asChild
            >
              <TouchableOpacity>
                <CharacterItem item={item} />
              </TouchableOpacity>
            </Link>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={<SkeletonLoading />}
          ListFooterComponent={
            <View>{isFetchingNextPage && <ActivityIndicator />}</View>
          }
        />
      </View>
    </View>
  );
}
