import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "../schemas/productSchema";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product: Product) => {
        const existingItem = get().cartItems.find(
          (item) => item.modelCode === product.modelCode
        );

        if (existingItem) {
          // Product zit al in de winkelwagen, verhoog het aantal
          set((state) => ({
            cartItems: state.cartItems.map((item) =>
              item.modelCode === product.modelCode
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          // Product toevoegen aan de winkelwagen met een hoeveelheid van 1
          set((state) => ({
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          }));
          toast.success(`${product.displayName} added to cart`);
        }
      },
    }),

    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
