import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "../schemas/productSchema";

interface FavoritesStore {
  favoriteProducts: Product[];
  toggleFavorite: (product: Product) => void;
  removeFavorite: (modelCode: string) => void;
  hasFavorited: (modelCode: string) => boolean;
}

const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoriteProducts: [],

      toggleFavorite: (product: Product) => {
        const isFavorited = get().favoriteProducts.some(
          (item) => item.modelCode === product.modelCode
        );

        if (isFavorited) {
          // remove the product from the favorites
          set((state) => ({
            favoriteProducts: state.favoriteProducts.filter(
              (item) => item.modelCode !== product.modelCode
            ),
          }));
        } else {
          // add the product to the favorites
          set((state) => ({
            favoriteProducts: [...state.favoriteProducts, product],
          }));
          toast.success(`${product.displayName} added to favorites`);
        }
      },

      removeFavorite: (modelCode: string) => {
        set((state) => ({
          favoriteProducts: state.favoriteProducts.filter(
            (item) => item.modelCode !== modelCode
          ),
        }));
      },

      hasFavorited: (modelCode: string) => {
        return get().favoriteProducts.some(
          (item) => item.modelCode === modelCode
        );
      },
    }),
    {
      name: "favorite-storage",
    }
  )
);

export default useFavoritesStore;
