import useFavoriteStore from "@/store/favorite-store";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface props {
  characterName: string;
}

export default function FavoriteButton({ characterName }: props) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav === characterName);
  return (
    <TouchableOpacity onPress={() => toggleFavorite(characterName)}>
      <FontAwesome
        name={isFavorite ? "heart" : "heart-o"}
        className="justify-self-end"
        size={30}
        color="red"
      />
    </TouchableOpacity>
  );
}
