import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/Card";
import { CustomText } from "@/components/text-custom";
import React from "react";
import { View, Text } from "react-native";

export function MovieCard() {
  return (
    <View className="flex w-72 gap-2 mx-5">
      <Card>
        <CardHeader>
          <CardTitle>Accelerate UI</CardTitle>
          <CardDescription>Enter a new development experience</CardDescription>
        </CardHeader>
        <CardContent>
          <CustomText className="text-base">
            Sleek, easy to use components to build your next app faster.
          </CustomText>
        </CardContent>
        <CardFooter>
          <CustomText className="text-sm text-yellow-200">
            Inspired by shadcn/ui
          </CustomText>
        </CardFooter>
      </Card>
    </View>
  );
}
