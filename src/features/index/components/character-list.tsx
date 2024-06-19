import React from "react";
import { View, Text, FlatList } from "react-native";
import { ISimpleCharacter } from "../types/people-list-types";
import { CharacterItem } from "./character-item";

interface CharacterProps {
  characters: ISimpleCharacter[];
}

export const CharacterList: React.FC<CharacterProps> = ({ characters }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.name} // Assumindo que homeworld é único por simplicidade
      renderItem={({ item }) => <CharacterItem item={item} />}
    />
  );
};

export default CharacterList;
