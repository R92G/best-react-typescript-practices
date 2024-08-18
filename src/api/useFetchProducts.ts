import { useQuery } from "@tanstack/react-query";
import { Category, categorySchema } from "../schemas/categorySchema";
import slugify from "slugify";
import { generateProductSlug } from "../lib/utils";
import placeholderImage from "../assets/placeholder.jpg";

const API_URL = import.meta.env.VITE_API_URL;

const fetchCategoriesWithProducts = async (): Promise<Category[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Process categories and their products
    const categories: Category[] = await Promise.all(
      data.response.resultData.productList.map(async (item: Category) => ({
        ...item,
        slug: slugify(item.categorySubTypeName, { lower: true }),
        thumbUrl: item.modelList[0].thumbUrl || placeholderImage,
        modelList: item.modelList.map((product) => ({
          ...product,
          categorySlug: slugify(item.categorySubTypeName, { lower: true }),
          categoryName: item.categorySubTypeName,
          slug: generateProductSlug(product),
        })),
      }))
    );

    return categorySchema.array().parse(categories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
};

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["categoriesWithProducts"],
    queryFn: fetchCategoriesWithProducts,
    staleTime: 1000 * 60 * 30,
  });
};
