import { z } from "zod";

// Definieer het schema voor de productinformatie
export const productSchema = z.object({
  modelCode: z.string(),
  displayName: z.string(),
  thumbUrl: z.string(),
  categorySlug: z.string().optional().nullable(),
  categoryName: z.string().optional().nullable(),
  price: z.string().optional().nullable(),
  priceDisplay: z.string().nullable().optional(),
  listPriceDisplay: z.string().nullable().optional(),
  promotionPriceDisplay: z.string().nullable().optional(),
  ratings: z.string().nullable().optional(),
  reviewCount: z.string().nullable().optional(),
  usp: z.array(z.string()).nullable().optional(),
  galleryImage: z.array(z.string()),
  slug: z.string().optional(),
  ctaText: z.string().optional(),
  storePromotions: z
    .array(
      z.object({
        promotionText: z.string(),
        promotionFormattedText: z.string().nullable(),
      })
    )
    .nullable()
    .optional(),
  energyLabelGrade: z.string().nullable().optional(),
  stockStatusText: z.string().nullable().optional(),
  fmyChipList: z
    .array(
      z.object({
        fmyChipCode: z.string(),
        fmyChipType: z.string(),
        fmyChipName: z.string(),
      })
    )
    .nullable()
    .optional(),
});

export type Product = z.infer<typeof productSchema>;
