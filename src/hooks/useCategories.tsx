import { useMemo } from "react";
import { Category } from "../schemas/categorySchema";
import { useFetchProducts } from "../api/useFetchProducts";

/**
 * Custom hook to fetch and process unique categories from the products data.
 *
 * This hook uses the `useFetchProducts` hook to fetch products from the API
 * and then extracts the unique categories based on the category's `categorySubTypeName`.
 *
 * @returns {object} An object containing:
 * - `Category[]`: The list of unique categories derived from the products.
 * - `isLoading`: Boolean indicating if the data is still being loaded.
 * - `error`: An error object if the fetch failed.
 */
export const useCategories = () => {
  const { data, isLoading, error } = useFetchProducts();

  // Memoize the computation of unique categories to avoid recalculating on every render
  const uniqueCategories = useMemo(() => {
    if (!data) return [];

    // Reduce the data to find unique categories based on the 'categorySubTypeName' property
    return data.reduce((acc: Category[], category: Category) => {
      const existingCategory = acc.find(
        (item) => item.categorySubTypeName === category.categorySubTypeName
      );

      // Add category only if it's not already in the accumulator
      if (!existingCategory) {
        acc.push(category);
      }

      return acc;
    }, []);
  }, [data]);

  return {
    categories: uniqueCategories,
    isLoading,
    error,
  };
};
