import { useMemo } from "react";
import { useFetchProducts } from "../api/useFetchProducts";
import { useParams } from "react-router-dom";
import slugify from "slugify";

export const useProductsByCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const { data, isLoading, error } = useFetchProducts();

  const products = useMemo(() => {
    if (isLoading || !data || !categorySlug) {
      return [];
    }

    const filteredData = data.filter(
      (category) =>
        slugify(category.categorySubTypeName, { lower: true }) === categorySlug
    );

    const allProducts = filteredData.flatMap((category) => category.modelList);

    return allProducts;
  }, [data, categorySlug, isLoading]);

  return { products, isLoading, error };
};
