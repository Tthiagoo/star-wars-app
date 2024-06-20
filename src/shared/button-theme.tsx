import { Button } from "./Button";
import { useColorScheme } from "nativewind";
import { Feather } from "@expo/vector-icons";
export function ButtonToogle() {
  const { colorScheme: themeSelected, setColorScheme } = useColorScheme();
  return (
    <Button
      icon={
        <Feather
          name={themeSelected === "dark" ? "moon" : "sun"}
          size={24}
          color="black"
        />
      }
      className="mr-6 self-end"
      onPress={() =>
        setColorScheme(themeSelected === "dark" ? "light" : "dark")
      }
    />
  );
}
