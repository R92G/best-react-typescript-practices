import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "../schemas/productSchema";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
