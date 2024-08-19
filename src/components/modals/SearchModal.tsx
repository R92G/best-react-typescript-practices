import React, { useState, useRef, useLayoutEffect } from "react";
import useSearchModal from "../../stores/useSearchModal";
import styled from "styled-components";
import { Modal } from "./Modal";

export const SearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearchModal();
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal title="Search Products" isOpen={isOpen} onClose={closeSearch}>
      <SearchInput
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products..."
      />
    </Modal>
  );
};

export default SearchModal;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
