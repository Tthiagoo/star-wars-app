import { AntDesign } from "@expo/vector-icons";
import React from "react";

export default function FavoriteButton() {
  return (
    <AntDesign
      name="heart"
      className="justify-self-end"
      size={20}
      color="red"
    />
  );
}
