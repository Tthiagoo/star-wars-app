import React from "react";
import { render } from "@testing-library/react-native";

import CharacterList from "@/features/index/components/character-list";
import { StarWarsCharacter } from "@/features/details/types/details-character";

const mockCharacters: StarWarsCharacter[] = [
  {
    name: "Luke Skywalker",
    gender: "male",
    height: "177",
  },
];

describe("CharacterList", () => {
  it("renders the list of characters", () => {
    const { getByText, debug } = render(
      <CharacterList characters={mockCharacters} />,
    );

    expect(getByText("Luke Skywalker")).toBeTruthy();
    debug();
  });
});
