import create from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFavoriteStore from "@/store/favorite-store";
import { renderHook } from "@testing-library/react-native";
import { act } from "react-test-renderer";
import { initial } from "lodash";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

// Helper function to reset Zustand store
const initalState = useFavoriteStore.getInitialState();

describe("useFavoriteStore", () => {
  beforeEach(() => {
    useFavoriteStore.setState(initalState);
  });

  it("should initialize with an empty favorites array", () => {
    const { result } = renderHook(() => useFavoriteStore());
    expect(result.current.favorites).toEqual([]);
  });

  it("should add a favorite character", () => {
    const { toggleFavorite } = useFavoriteStore.getState();
    toggleFavorite("Teste 1");
    const { favorites } = useFavoriteStore.getState();
    console.log(favorites);
  });

  it("should remove a favorite character if it already exists", () => {
    const { toggleFavorite } = useFavoriteStore.getState();
    toggleFavorite("Teste 1");
    toggleFavorite("Teste 1");
    const { favorites } = useFavoriteStore.getState();

    expect(favorites).toEqual([]);
  });
});
