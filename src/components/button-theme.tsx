import { Button } from "./Button";
import { useColorScheme } from "nativewind";
export function ButtonToogle() {
  const { colorScheme: themeSelected, setColorScheme } = useColorScheme();
  return (
    <Button
      label="Toggle mode"
      className="mr-6 self-end"
      onPress={() =>
        setColorScheme(themeSelected === "dark" ? "light" : "dark")
      }
    />
  );
}
