import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../schemas/productSchema";
import { useFetchProducts } from "../api/useFetchProducts";
import slugify from "slugify";

/*
 * useProductBySlug
 *
 * A custom hook that fetches a product by its slug.
 *
 * @returns {Object} An object containing the product, isLoading, and isError.
 */

export const useProductBySlug = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useFetchProducts();

  const product = useMemo(() => {
    if (!data) return null;

    let foundProduct: Product | null = null;

    // Find the product by its slug
    for (const category of data) {
      const product = category.modelList.find(
        (prod: Product) =>
          slugify(`${prod.displayName} ${prod.modelCode}`, { lower: true }) ===
          productSlug
      );
      if (product) {
        foundProduct = product;
        break;
      }
    }

    // Redirect to the first product if the product is not found for user experience
    if (!foundProduct && data.length > 0 && data[0].modelList.length > 0) {
      const firstProduct = data[0].modelList[0];
      const newProductSlug = slugify(
        `${firstProduct.displayName} ${firstProduct.modelCode}`,
        { lower: true }
      );
      navigate(`/products/${newProductSlug}`, { replace: true });
    }

    return foundProduct;
  }, [data, productSlug, navigate]);

  return { product, isLoading, isError };
};
