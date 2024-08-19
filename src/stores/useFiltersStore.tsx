import { create } from "zustand";
import { Product } from "../schemas/productSchema";

interface Filters {
  minRating: string | null;
  minPrice: string | null;
  maxPrice: string | null;
  inStock: boolean | null;
  energyLabel: string | null;
}

interface FiltersStore {
  products: Product[];
  filteredProducts: Product[];
  filters: Filters;
  setProducts: (products: Product[]) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  products: [],
  filteredProducts: [],
  filters: {
    minRating: null,
    minPrice: null,
    maxPrice: null,
    inStock: null,
    energyLabel: null,
  },
  setProducts: (products: Product[]) => {
    set(() => ({
      products,
      filteredProducts: products, // Initially, no filters applied
    }));
  },
}));
