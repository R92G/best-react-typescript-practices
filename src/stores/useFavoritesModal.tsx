import { create } from "zustand";

interface FavoritesModalStore {
  isOpen: boolean;
  openFavorites: () => void;
  closeFavorites: () => void;
}

const useFavoritesModal = create<FavoritesModalStore>((set) => ({
  isOpen: false,
  openFavorites: () => set({ isOpen: true }),
  closeFavorites: () => set({ isOpen: false }),
}));

export default useFavoritesModal;
