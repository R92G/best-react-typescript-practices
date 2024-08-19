import { useMemo } from "react";
import { Category } from "../schemas/categorySchema";
import { useFetchProducts } from "../api/useFetchProducts";

export const useCategories = () => {
  const { data, isLoading, error } = useFetchProducts();

  const uniqueCategories = useMemo(() => {
    if (!data) return [];

    return data.reduce((acc: Category[], category: Category) => {
      const existingCategory = acc.find(
        (item) => item.categorySubTypeName === category.categorySubTypeName
      );

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
