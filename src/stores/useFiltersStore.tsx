import { create } from "zustand";
import { Product } from "../schemas/productSchema";
import { toast } from "react-hot-toast";

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
  setFilter: <K extends keyof Filters>(filterKey: K, value: Filters[K]) => void;
  applyFilters: (filters: Filters) => void;
  clearFilters: () => void;
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
  setFilter: <K extends keyof Filters>(filterKey: K, value: Filters[K]) => {
    set((state) => ({
      filters: { ...state.filters, [filterKey]: value },
    }));
  },
  applyFilters: (newFilters: Filters) => {
    set((state) => {
      let updatedProducts = [...state.products];

      // Apply rating filter
      if (newFilters.minRating) {
        const minRating = parseFloat(newFilters.minRating);
        updatedProducts = updatedProducts.filter((product) => {
          const rating = parseFloat(product.ratings ?? "");
          return !isNaN(rating) && rating >= minRating;
        });
      }

      // Apply price filters
      const minPrice = newFilters.minPrice
        ? parseFloat(newFilters.minPrice)
        : 0;
      const maxPrice = newFilters.maxPrice
        ? parseFloat(newFilters.maxPrice)
        : Infinity;

      updatedProducts = updatedProducts.filter((product) => {
        const price = parseFloat(product.price ?? "");
        return !isNaN(price) && price >= minPrice && price <= maxPrice;
      });

      // Apply in-stock filter
      if (newFilters.inStock !== null) {
        updatedProducts = updatedProducts.filter((product) => {
          return newFilters.inStock
            ? product.stockStatusText === "inStock"
            : true;
        });
      }

      // Apply energy label filter
      if (newFilters.energyLabel) {
        updatedProducts = updatedProducts.filter((product) => {
          return product.energyLabelGrade === newFilters.energyLabel;
        });
      }

      return {
        filteredProducts: updatedProducts,
      };
    });
  },
  clearFilters: () => {
    set((state) => ({
      filters: {
        minRating: null,
        minPrice: null,
        maxPrice: null,
        inStock: null,
        energyLabel: null,
      },
      filteredProducts: state.products, // Reset to original product list
    }));
    toast.success("Filters cleared");
  },
}));
