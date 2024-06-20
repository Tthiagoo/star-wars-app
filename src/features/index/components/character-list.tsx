import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { IPeopleList, ISimpleCharacter } from "../types/people-list-types";
import { CharacterItem } from "./character-item";

interface CharacterProps {
  characters: IPeopleList[];
}

export const CharacterList: React.FC<CharacterProps> = ({ characters }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => console.log("chamouuu")}>
          <CharacterItem item={item} />
        </TouchableOpacity>
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default CharacterList;
