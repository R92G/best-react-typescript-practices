import React, { useState } from "react";
import useSearchModal from "../../stores/useSearchModal";
import { Modal } from "./Modal";

export const SearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearchModal();
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  return (
    <Modal title="Search Products" isOpen={isOpen} onClose={closeSearch}>
      {/* Placeholder for more content */}
    </Modal>
  );
};
