// src/store/useSearchModal.ts
import { create } from "zustand";

interface SearchModalStore {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  openSearch: () => set({ isOpen: true }),
  closeSearch: () => set({ isOpen: false }),
}));

export default useSearchModal;
