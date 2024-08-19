import { create } from "zustand";

interface FiltersModalStore {
  isOpen: boolean;
  openFilters: () => void;
  closeFilters: () => void;
}

const useFiltersModal = create<FiltersModalStore>((set) => ({
  isOpen: false,
  openFilters: () => set({ isOpen: true }),
  closeFilters: () => set({ isOpen: false }),
}));

export default useFiltersModal;
