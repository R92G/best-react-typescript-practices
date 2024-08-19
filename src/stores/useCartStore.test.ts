import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useCartStore from "./useCartStore";

/* This test case is using the vitest library to test the useCartStore hook.
Here we are testing the addToCart function of the useCartStore hook. */

describe("useCartStore", () => {
  it("should add a product to the cart", () => {
    // Initializing the Zustand store via renderHook
    const { result } = renderHook(() => useCartStore());

    // Mock product to add to the cart
    const mockProduct = {
      modelCode: "12345",
      displayName: "Test Product",
      thumbUrl: "https://example.com/image.png",
      categorySlug: "test-category",
      categoryName: "Test Category",
      price: "100.00",
      priceDisplay: "$100.00",
      listPriceDisplay: "$120.00",
      promotionPriceDisplay: null,
      ratings: "4.5",
      reviewCount: "100",
      usp: ["USP1", "USP2"],
      galleryImage: [
        "https://example.com/image1.png",
        "https://example.com/image2.png",
      ],
      slug: "test-product",
      ctaText: "Buy Now",
      storePromotions: [],
      energyLabelGrade: "A+",
      stockStatusText: "In Stock",
      fmyChipList: [],
    };

    // Add the product to the cart
    act(() => {
      result.current.addToCart(mockProduct);
    });

    // Assert the product is added to the cart with quantity 1
    const cartItems = result.current.cartItems;
    expect(cartItems).toHaveLength(1);
    expect(cartItems[0].modelCode).toBe(mockProduct.modelCode);
    expect(cartItems[0].quantity).toBe(1);
  });
});
