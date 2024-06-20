import React from "react";
import { Skeleton } from "../../../shared/Skeleton";

import { View } from "react-native";

export function SkeletonLoading() {
  return (
    <>
      <View
        testID="skeleton-loading"
        className="flex m-5  gap-8 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400"
      >
        <View className="flex flex-row items-center justify-center">
          <Skeleton className="w-56 h-10" />
        </View>
        <View className="gap-3">
          <View className="flex flex-row justify-between">
            <Skeleton className="w-20 h-8" />

            <Skeleton className="w-20 h-8" />
          </View>
          <View className="flex flex-row justify-between">
            <Skeleton className="w-20 h-8" />

            <Skeleton className="w-20 h-8" />
          </View>
        </View>
      </View>
      <View className="flex m-5  gap-8 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400">
        <View className="flex flex-row items-center justify-center">
          <Skeleton className="w-56 h-10" />
        </View>
        <View className="gap-3">
          <View className="flex flex-row justify-between">
            <Skeleton className="w-20 h-8" />

            <Skeleton className="w-20 h-8" />
          </View>
          <View className="flex flex-row justify-between">
            <Skeleton className="w-20 h-8" />

            <Skeleton className="w-20 h-8" />
          </View>
        </View>
      </View>
      <View className="flex m-5  gap-8 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400">
        <View className="flex flex-row items-center justify-center">
          <Skeleton className="w-56 h-10" />
        </View>
        <View className="gap-3">
          <View className="flex flex-row justify-between">
            <Skeleton className="w-20 h-8" />

            <Skeleton className="w-20 h-8" />
          </View>
          <View className="flex flex-row justify-between">
            <Skeleton className="w-20 h-8" />

            <Skeleton className="w-20 h-8" />
          </View>
        </View>
      </View>
    </>
  );
}
export function SkeletonLoadingUnit() {
  return (
    <View
      testID="skeleton-loading"
      className="flex m-5  gap-8 border-2 border-amber-500 rounded-lg w-80 px-3 py-5 dark:border-amber-400"
    >
      <View className="flex flex-row items-center justify-center">
        <Skeleton className="w-56 h-10" />
      </View>
      <View className="gap-3">
        <View className="flex flex-row justify-between">
          <Skeleton className="w-20 h-8" />

          <Skeleton className="w-20 h-8" />
        </View>
        <View className="flex flex-row justify-between">
          <Skeleton className="w-20 h-8" />

          <Skeleton className="w-20 h-8" />
        </View>
      </View>
    </View>
  );
}
