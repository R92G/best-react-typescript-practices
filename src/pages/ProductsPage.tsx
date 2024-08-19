import React from "react";
import { ProductCard } from "../components/product/ProductCard";
import { SkeletonGrid } from "../components/skeleton/SkeletonGrid";
import { useProductsByCategory } from "../hooks/useProductsByCategory";
import { Grid } from "../components/layout/Grid";
import { CenteredTitle } from "../components/layout/CenteredTitle";
import { Container } from "../components/layout/Container";
import styled from "styled-components";
import { StatusMessage } from "../components/common/StatusMessage";
import { BackLink } from "../components/common/BackLink";

const ProductsPage: React.FC = () => {
  const { products, isLoading, error } = useProductsByCategory();

  if (isLoading && products.length === 0) {
    return <SkeletonGrid />;
  }

  if (error || products.length === 0) {
    return <StatusMessage type="normal" message="No products were found." />;
  }

  return (
    <Container>
      <CenteredTitle level={1}>Products</CenteredTitle>
      <HeaderWrapper>
        <BackLink to="/categories" label="Categories" />
      </HeaderWrapper>

      <Grid>
        {products.map((product) => (
          <ProductCard key={product.modelCode} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;
