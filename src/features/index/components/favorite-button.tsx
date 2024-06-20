import useFavoriteStore from "@/store/favorite-store";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface props {
  characterName: string;
}
/**
 * the component will check if there is a name in the favorites list that is the same as the card the button is associated with
 * @param characterName - string name of the character
 * @returns
 */

export default function FavoriteButton({ characterName }: props) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorited = favorites.some(
    (favNameInTheStore) => favNameInTheStore === characterName,
  );
  return (
    <TouchableOpacity onPress={() => toggleFavorite(characterName)}>
      <FontAwesome
        name={isFavorited ? "heart" : "heart-o"}
        className="justify-self-end"
        size={30}
        color="red"
      />
    </TouchableOpacity>
  );
}
