import { Link } from "expo-router";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import CharacterItem from "./character-item";
import { SkeletonLoading } from "./skeleton-loading";
import { StarWarsCharacter } from "@/features/details/types/details-character";
interface props {
  dataPeopleResponse: StarWarsCharacter[];
  onEndReached: () => void;
  isFetchingNextPage: boolean;
}

export function CharacterList({
  dataPeopleResponse,
  onEndReached,
  isFetchingNextPage,
}: props) {
  return (
    <FlatList
      data={dataPeopleResponse}
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
          <CharacterItem info={item} />
        </Link>
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
      ListEmptyComponent={<SkeletonLoading />}
      ListFooterComponent={
        <View>{isFetchingNextPage && <SkeletonLoading />}</View>
      }
    />
  );
}
