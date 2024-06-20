import React from "react";
import { Skeleton } from "../../../components/Skeleton";
import { CustomText } from "@/components/text-custom";
import { View } from "react-native";

export function SkeletonMovieLoading() {
  return (
    <>
      <View
        testID="skeleton-loading-movie"
        className="flex m-5  gap-2 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400"
      >
        <Skeleton className="w-48 h-8 " />
        <Skeleton className="w-20 h-2 mb-5 " />
        <Skeleton className="w-44 h-16 mb-5" />
        <Skeleton className="w-32 h-2" />
      </View>
    </>
  );
}
