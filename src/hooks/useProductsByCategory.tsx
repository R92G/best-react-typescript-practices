import { useMemo, useEffect } from "react";
import { useFetchProducts } from "../api/useFetchProducts";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import { useFiltersStore } from "../stores/useFiltersStore";

/**
 * Custom hook to fetch products by category.
 *
 * @returns {Object} contains products, isLoading and error
 */
export const useProductsByCategory = () => {
  // Get the categorySlug from the URL
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const { data, isLoading, error } = useFetchProducts();

  // set the products in the filters store
  const setProducts = useFiltersStore((state) => state.setProducts);

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

  // Gebruik useEffect om de producten naar de store te pushen zodra ze zijn opgehaald
  useEffect(() => {
    if (!isLoading && products.length > 0) {
      // Alleen setProducts aanroepen wanneer de producten zijn geladen
      setProducts(products);
    }
  }, [products, isLoading, setProducts]);

  return { products, isLoading, error };
};
