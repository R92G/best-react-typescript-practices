import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { useDebounce } from "use-debounce";
import useSearchModal from "../../stores/useSearchModal";
import { useFetchProducts } from "../../api/useFetchProducts";
import { Product } from "../../schemas/productSchema";
import { Modal } from "./Modal";
import { ProductListItem } from "../features/ProductListItem";
import { useNavigate } from "react-router-dom";

export const SearchModal: React.FC = () => {
  const { isOpen, closeSearch } = useSearchModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const { data: categoriesWithProducts, isLoading, error } = useFetchProducts();
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal is opened, timeout is needed to wait for the input to render.
  useLayoutEffect(() => {
    setTimeout(() => {
      if (isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }, [isOpen, inputRef]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleNavigate = (productSlug: string) => {
    closeSearch();
    navigate(`/products/${productSlug}`);
  };

  const handleCloseSearch = () => {
    setSearchQuery("");
    closeSearch();
  };

  const filteredProducts = useMemo(() => {
    if (!categoriesWithProducts || !debouncedSearchQuery) return [];

    return categoriesWithProducts
      .flatMap((category) => category.modelList)
      .filter((product: Product) =>
        product.displayName
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase())
      );
  }, [categoriesWithProducts, debouncedSearchQuery]);

  if (!isOpen) return null;

  return (
    <Modal title="Search Products" isOpen={isOpen} onClose={handleCloseSearch}>
      <SearchInput
        type="text"
        ref={inputRef}
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {filteredProducts.length > 0 ? (
        <ScrollableContainer>
          {filteredProducts.map((product) => (
            <ProductListItem
              key={product.modelCode}
              thumbUrl={product.thumbUrl}
              name={product.displayName}
              price={product.priceDisplay ?? "N/A"}
              onNavigate={() => handleNavigate(product.slug || "")} // Navigate on click
            />
          ))}
        </ScrollableContainer>
      ) : (
        <p>No products found.</p>
      )}
    </Modal>
  );
};

// Styled components
const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ScrollableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-top: 1rem;
`;
