import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Slot } from "expo-router";
import "../global.css";
import { StatusBar, StyleSheet } from "react-native";

import { useColorScheme } from "nativewind";
import { ThemeProvider } from "@/provider/theme-provider";

import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();

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
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: "#1e293b",
    },
  });
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor={"#1e293b"} />
        <SafeAreaView style={styles.container}>
          <Slot />
        </SafeAreaView>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
