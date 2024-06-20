import { create } from "zustand";
import { persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

export interface FavoriteStore {
  favorites: string[];
  toggleFavorite: (nameCharacter: string) => void;
}
/**
 * Tsync storage state management that stores favorite characters
 * * Through zustand middleware, it can persist some data without using useEffect
 * * Save only the character name and compare with the store
 */
const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (nameCharacter: string) => {
        const { favorites } = get();
        const updatedFavorites = favorites.some((fav) => fav === nameCharacter)
          ? favorites.filter((fav) => fav !== nameCharacter)
          : [...favorites, nameCharacter];

        set({ favorites: updatedFavorites });
      },
    }),
    {
      name: "favorites",
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useFavoriteStore;
