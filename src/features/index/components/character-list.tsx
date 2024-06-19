import React from "react";
import { View, Text, FlatList } from "react-native";
import { ISimpleCharacter } from "../types/people-list-types";

interface CharacterProps {
  characters: ISimpleCharacter[];
}

export const CharacterList: React.FC<CharacterProps> = ({ characters }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.name} // Assumindo que homeworld é único por simplicidade
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.gender}</Text>
          <Text>{item.height}</Text>
          <Text>{item.favorite ? "Favorite" : "Not Favorite"}</Text>
        </View>
      )}
    />
  );
};

export default CharacterList;
