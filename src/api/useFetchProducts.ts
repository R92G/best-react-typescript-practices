import { useQuery } from "@tanstack/react-query";
import { Category, categorySchema } from "../schemas/categorySchema";
import slugify from "slugify";
import { generateProductSlug } from "../lib/utils";
import placeholderImage from "../assets/placeholder.jpg";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Fetches categories with their associated products from the API.
 *
 * This function fetches the category data, processes it by adding slugs and placeholder images,
 * and validates the data against the `Category` schema.
 *
 * @returns {Promise<Category[]>} A promise that resolves with an array of validated categories.
 */
const fetchCategoriesWithProducts = async (): Promise<Category[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Process the fetched data to add slugs and placeholder images
    const categories: Category[] = await Promise.all(
      data.response.resultData.productList.map(async (item: Category) => ({
        ...item,

        slug: slugify(item.categorySubTypeName, { lower: true }),
        // Use thumbnail image from the first product as a placeholder image
        thumbUrl: item.modelList[0].thumbUrl || placeholderImage,
        // Process metadata for each product
        modelList: item.modelList.map((product) => ({
          ...product,
          categorySlug: slugify(item.categorySubTypeName, { lower: true }),
          categoryName: item.categorySubTypeName,
          slug: generateProductSlug(product),
        })),
      }))
    );

    // Validate the processed data against the category schema
    return categorySchema.array().parse(categories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
};

/**
 * Custom hook to fetch categories with products using React Query.
 *
 * This hook uses React Query's `useQuery` to fetch categories with their associated products.
 * The data is cached and considered fresh for 30 minutes (`staleTime`), reducing unnecessary API calls.
 *
 * @returns {object} An object containing the fetched categories, loading state, and potential errors.
 */
export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["categoriesWithProducts"],
    queryFn: fetchCategoriesWithProducts,
    staleTime: 1000 * 60 * 30,
  });
};
