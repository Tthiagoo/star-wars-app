import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Slot } from "expo-router";
import "../global.css";
import { StatusBar, Text } from "react-native";
import { Button } from "@/components/Button";
import { colorScheme, useColorScheme } from "nativewind";
import { ThemeProvider } from "@/provider/theme-provider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function ButtonToogle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Button
      label="Toggle mode"
      className="mt-10"
      onPress={() => setColorScheme(colorScheme === "dark" ? "light" : "dark")}
    />
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
    <ThemeProvider>
      <StatusBar backgroundColor={"#455"} />
      <ButtonToogle />
      <Slot />
    </ThemeProvider>
  );
}
