import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { StarWarsCharacter } from "@/features/details/types/details-character";
import { CharacterList } from "@/features/index/components/character-list";

// Mock the dependencies

describe("CharacterList", () => {
  const mockData: StarWarsCharacter[] = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
    },
  ];

  const onEndReachedMock = jest.fn();

  it("renders correctly with data", () => {
    const { getByText } = render(
      <CharacterList
        dataPeopleResponse={mockData}
        onEndReached={onEndReachedMock}
        isFetchingNextPage={false}
      />,
    );

    expect(getByText("Luke Skywalker")).toBeTruthy();
    expect(getByText("Darth Vader")).toBeTruthy();
  });

  it("renders SkeletonLoading when there is no data", () => {
    const { getByTestId } = render(
      <CharacterList
        dataPeopleResponse={[]}
        onEndReached={onEndReachedMock}
        isFetchingNextPage={false}
      />,
    );

    expect(getByTestId("SkeletonLoading")).toBeTruthy();
  });

  it("calls onEndReached when end of list is reached", () => {
    const { getByText, getByTestId } = render(
      <CharacterList
        dataPeopleResponse={mockData}
        onEndReached={onEndReachedMock}
        isFetchingNextPage={false}
      />,
    );

    fireEvent.scroll(getByTestId("flat-list"), {
      nativeEvent: {
        contentOffset: { y: 500 },
        contentSize: { height: 1000 },
        layoutMeasurement: { height: 100 },
      },
    });

    expect(onEndReachedMock).toHaveBeenCalledTimes(1);
  });

  it("renders SkeletonLoading at the footer when fetching next page", () => {
    const { getByTestId } = render(
      <CharacterList
        dataPeopleResponse={mockData}
        onEndReached={onEndReachedMock}
        isFetchingNextPage={true}
      />,
    );

    expect(getByTestId("SkeletonLoading")).toBeTruthy();
  });
});
