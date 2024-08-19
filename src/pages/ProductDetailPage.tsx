import React from "react";
import { SkeletonDetail } from "../components/skeleton/SkeletonDetail";
import { StatusMessage } from "../components/common/StatusMessage";
import { useProductBySlug } from "../hooks/useProductBySlug";
import { Container } from "../components/layout/Container";
import { Banner } from "../components/features/Banner";

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

  return (
    <>
      {" "}
      <Banner promotions={product.storePromotions} />
      <Container paddingTop="10rem">{/* Content will go here */}</Container>
    </>
  );
};

export default ProductDetailPage;
