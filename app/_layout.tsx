import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Slot } from "expo-router";
import "../global.css";
import { Text } from "react-native";
import { Button } from "@/components/Button";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function ModeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Button
      label="test"
      onPress={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
    >
      Toggle mode
    </Button>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Slot />
    </>
  );
}
