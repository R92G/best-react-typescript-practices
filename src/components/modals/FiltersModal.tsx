import React from "react";
import { Modal } from "./Modal";
import { useFiltersStore } from "../../stores/useFiltersStore";

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FiltersModal: React.FC<FiltersModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { filters } = useFiltersStore();

  return (
    <Modal title="Filter Products" isOpen={isOpen} onClose={onClose}>
      {/* Content placeholder */}
    </Modal>
  );
};

export default FiltersModal;
