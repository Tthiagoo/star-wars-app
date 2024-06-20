import { act } from "@testing-library/react-native";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFavoriteStore, { FavoriteStore } from "@/store/favorite-store";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe("useFavoriteStore", () => {
  beforeEach(() => {
    mockedAsyncStorage.setItem.mockClear();
    mockedAsyncStorage.getItem.mockClear();
    mockedAsyncStorage.removeItem.mockClear();
  });

  it("should initialize with an empty favorites array", () => {
    const { favorites } = useFavoriteStore.getState();
    expect(favorites).toEqual([]);
  });

  it("should add an item to favorites", () => {
    const { toggleFavorite } = useFavoriteStore.getState();

    act(() => {
      toggleFavorite("item1");
    });

    expect(useFavoriteStore.getState().favorites).toContain("item1");
  });

  it("should remove an item from favorites", () => {
    const { toggleFavorite } = useFavoriteStore.getState();

    act(() => {
      toggleFavorite("item1");
    });

    expect(useFavoriteStore.getState().favorites).toStrictEqual(["item1"]);

    act(() => {
      toggleFavorite("item1");
    });

    expect(useFavoriteStore.getState().favorites).not.toContain(["item1"]);
  });
});
