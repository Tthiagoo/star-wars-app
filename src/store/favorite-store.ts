import { create } from "zustand";
import { persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

export interface FavoriteStore {
  favorites: string[];
  toggleFavorite: (nameCharacter: string) => void;
}

const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (item: string) => {
        const { favorites } = get();
        const updatedFavorites = favorites.some((fav) => fav === item)
          ? favorites.filter((fav) => fav !== item)
          : [...favorites, item];

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
