import { z } from "zod";
import { productSchema } from "./productSchema";

export const categorySchema = z.object({
  familyId: z.string(),
  modelCount: z.string(),
  modelList: z.array(productSchema),
  categorySubTypeName: z.string(),
  thumbUrl: z.string(),
  blurHash: z.string().optional(),
  slug: z.string().optional(),
});

export type Category = z.infer<typeof categorySchema>;
