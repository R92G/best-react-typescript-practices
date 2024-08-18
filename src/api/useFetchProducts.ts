import { Category, categorySchema } from "../schemas/categorySchema";

const API_URL = import.meta.env.VITE_API_URL;

const fetchCategoriesWithProducts = async (): Promise<Category[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return categorySchema.array().parse(data);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
};

export default fetchCategoriesWithProducts;
