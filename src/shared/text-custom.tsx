import React from "react";
import { Text, useColorScheme } from "react-native";

interface CustomTextProps {
  children: React.ReactNode;
  className?: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  className = "",
}) => {
  const colorScheme = useColorScheme();
  const textColorClass = colorScheme === "dark" ? "text-white" : "text-black";

  return <Text className={`${textColorClass} ${className}`}>{children}</Text>;
};
