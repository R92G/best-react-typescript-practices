import { useFetchProducts } from "../api/useFetchProducts";
import { useParams } from "react-router-dom";

export const useProductsByCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const { data, isLoading, error } = useFetchProducts();

  return { data, isLoading, error, categorySlug };
};
