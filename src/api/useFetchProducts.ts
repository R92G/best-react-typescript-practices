const API_URL = import.meta.env.VITE_API_URL;
import { Category, categorySchema } from "../schemas/categorySchema";

const fetchCategoriesWithProducts = async (): Promise<Category[]> => {
  const response = await fetch(API_URL);

  const data = await response.json();

  return categorySchema.array().parse(data);
};

export default fetchCategoriesWithProducts;
