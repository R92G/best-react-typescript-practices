import React from "react";
import { SkeletonDetail } from "../components/skeleton/SkeletonDetail";
import { StatusMessage } from "../components/common/StatusMessage";
import { useProductBySlug } from "../hooks/useProductBySlug";
import { Container } from "../components/layout/Container";

const ProductDetailPage: React.FC = () => {
  const { product, isLoading, isError } = useProductBySlug();

  if (isLoading && !product) {
    return (
      <Container>
        <SkeletonDetail />
      </Container>
    );
  }

  if (isError || !product) {
    return <StatusMessage message="Product niet gevonden." />;
  }

  return <></>;
};

export default ProductDetailPage;
