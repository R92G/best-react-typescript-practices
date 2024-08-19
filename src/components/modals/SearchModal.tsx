import React, { useState, useRef, useLayoutEffect, useMemo } from "react";
import { useDebounce } from "use-debounce";
import { useFetchProducts } from "../../api/useFetchProducts";
import useSearchModal from "../../stores/useSearchModal";
import styled from "styled-components";
import { Modal } from "./Modal";

export const SearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearchModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const { data: categoriesWithProducts, isLoading, error } = useFetchProducts();
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredProducts = useMemo(() => {
    if (!categoriesWithProducts || !debouncedSearchQuery) return [];

    return categoriesWithProducts
      .flatMap((category) => category.modelList)
      .filter((product) =>
        product.displayName
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase())
      );
  }, [categoriesWithProducts, debouncedSearchQuery]);

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.modelCode}>{product.displayName}</li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
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
