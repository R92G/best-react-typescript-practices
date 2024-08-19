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
}

export const useFiltersStore = create<FiltersStore>(() => ({
  products: [],
  filteredProducts: [],
  filters: {
    minRating: null,
    minPrice: null,
    maxPrice: null,
    inStock: null,
    energyLabel: null,
  },
}));
