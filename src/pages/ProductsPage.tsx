import React, { useEffect } from "react";
import { ProductCard } from "../components/product/ProductCard";
import { useProductsByCategory } from "../hooks/useProductsByCategory";
import { Grid } from "../components/layout/Grid";
import { CenteredTitle } from "../components/layout/CenteredTitle";
import { Container } from "../components/layout/Container";
import styled from "styled-components";
import { StatusMessage } from "../components/common/StatusMessage";
import { BackLink } from "../components/common/BackLink";
import { FilterButton } from "../components/common/FilterButton";
import { useFiltersStore } from "../stores/useFiltersStore";
import useFiltersModal from "../stores/useFiltersModal";
import { FiltersModal } from "../components/modals/FiltersModal";

const ProductsPage: React.FC = () => {
  const { products, isLoading, error } = useProductsByCategory();
  const filterModal = useFiltersModal();

  const filteredProducts = useFiltersStore((state) => state.filteredProducts);
  const setProducts = useFiltersStore((state) => state.setProducts);

  // Set products into the store when they are loaded
  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  if (error) {
    return <StatusMessage type="error" message="Something went wrong." />;
  }

  if (!isLoading && products.length === 0) {
    return <StatusMessage resetFilters message="No products found." />;
  }

  return (
    <>
      <Container>
        <CenteredTitle level={1}>Products</CenteredTitle>
        <HeaderWrapper>
          <BackLink to="/categories" label="Categories" />
          <FilterButton onClick={filterModal.openFilters} />
        </HeaderWrapper>

        <Grid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.modelCode} product={product} />
          ))}
        </Grid>
      </Container>
      <FiltersModal
        isOpen={filterModal.isOpen}
        onClose={filterModal.closeFilters}
      />
    </>
  );
};

export default ProductsPage;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;
