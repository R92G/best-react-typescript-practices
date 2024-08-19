import { useMemo } from "react";
import { useFetchProducts } from "../api/useFetchProducts";
import { useParams } from "react-router-dom";
import slugify from "slugify";

/**
 * Custom hook to fetch products by category.
 *
 * @returns {Object} contains products, isLoading and error
 */
export const useProductsByCategory = () => {
  // Get the categorySlug from the URL
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const { data, isLoading, error } = useFetchProducts();

  // Filter products based on category
  const products = useMemo(() => {
    if (isLoading || !data || !categorySlug) {
      return [];
    }

    const filteredData = data.filter(
      (category) =>
        slugify(category.categorySubTypeName, { lower: true }) === categorySlug
    );

    // Combine all products from all categories
    const allProducts = filteredData.flatMap((category) => category.modelList);

    return allProducts;
  }, [data, categorySlug, isLoading]);

  return { products, isLoading, error };
};
