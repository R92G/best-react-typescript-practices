import slugify from "slugify";
import { Product } from "../schemas/productSchema";

export const generateProductSlug = (product: Product) => {
  const { displayName, modelCode } = product;

  // Construct the slug using both displayName and modelCode
  const slug = slugify(`${displayName} ${modelCode}`, { lower: true });

  return slug;
};

export const getProductButtonText = (product: Product, isInCart: boolean) => {
  if (isInCart) return "In cart";
  if (product.stockStatusText !== "inStock") return "Not available";
  return "Buy now";
};
