import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Slot } from "expo-router";
import "../global.css";
import { StatusBar, Text, StyleSheet } from "react-native";
import { Button } from "@/components/Button";
import { useColorScheme } from "nativewind";
import { ThemeProvider } from "@/provider/theme-provider";
import { ButtonToogle } from "@/components/button-theme";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme: themeSelected } = useColorScheme();
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
      backgroundColor: themeSelected === "light" ? "#e2e8f0" : "#1e293b",
    },
  });
  return (
    <ThemeProvider>
      <StatusBar
        backgroundColor={themeSelected == "light" ? "#e2e8f0" : "#1e293b"}
      />
      <SafeAreaView style={styles.container}>
        <ButtonToogle />
        <Slot />
      </SafeAreaView>
    </ThemeProvider>
  );
}
