import React from "react";
import { ProductCard } from "../components/product/ProductCard";
import { SkeletonGrid } from "../components/skeleton/SkeletonGrid";
import { useProductsByCategory } from "../hooks/useProductsByCategory";
import { Grid } from "../components/layout/Grid";
import { CenteredTitle } from "../components/layout/CenteredTitle";
import { Container } from "../components/layout/Container";
import { StatusMessage } from "../components/common/StatusMessage";

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

      <Grid>
        {products.map((product) => (
          <ProductCard key={product.modelCode} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
