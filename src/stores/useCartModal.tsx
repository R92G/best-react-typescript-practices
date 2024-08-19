// src/store/useCartModal.ts
import { create } from "zustand";

interface CartModalStore {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const useCartModal = create<CartModalStore>((set) => ({
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));

export default useCartModal;
