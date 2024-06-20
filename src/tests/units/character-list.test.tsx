import React from "react";
import { render } from "@testing-library/react-native";
import {
  ICharacter,
  ISimpleCharacter,
} from "@/features/index/types/people-list-types";
import CharacterList from "@/features/index/components/character-list";

const mockCharacters: ICharacter[] = [
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
