import { Button } from "./Button";
import { useColorScheme } from "nativewind";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
export function ButtonBack() {
  return (
    <Button
      icon={<Feather name={"arrow-left"} size={33} color="white" />}
      className="mb-2 self-start bg-transparent"
      onPress={() => {
        router.back();
      }}
    />
  );
}
