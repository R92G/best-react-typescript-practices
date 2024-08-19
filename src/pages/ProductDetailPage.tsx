import React from "react";
import { SkeletonDetail } from "../components/skeleton/SkeletonDetail";
import { StatusMessage } from "../components/common/StatusMessage";
import { useProductBySlug } from "../hooks/useProductBySlug";
import { Container } from "../components/layout/Container";
import { Banner } from "../components/features/Banner";
import styled from "styled-components";
import { Carousel } from "../components/features/Carousel";
import { USPsContainer } from "../components/product/UspContainer";
import { ColorOptions } from "../components/product/Color";
import { PillButton } from "../components/common/PillButton";
import { OutOfStockBanner } from "../components/product/OutOfStockBanner";
import { getProductButtonText } from "../lib/utils";
import { EnergyLabel } from "../components/product/EnergyLabel";
import { HeartButton } from "../components/features/HeartButton";
import useCartStore from "../stores/useCartStore";
import { BackLink } from "../components/common/BackLink";

const ProductDetailPage: React.FC = () => {
  const { product, isLoading, isError } = useProductBySlug();
  const addToCart = useCartStore((state) => state.addToCart);
  const isInCart = useCartStore((state) => state.isInCart(product?.modelCode));

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
      <Banner promotions={product.storePromotions} />
      <Container paddingTop="10rem">
        <BackLink
          to={`/categories/${product.categorySlug}`}
          label={product.categoryName}
        />
        <ContentWrapper>
          <HeartButton product={product} />
          <CarouselContainer>
            <Carousel images={product.galleryImage || []} />
          </CarouselContainer>

          <InfoContainer>
            <ProductTitle>{product.displayName}</ProductTitle>
            <ProductPrice>
              {product.priceDisplay ? `€${product.priceDisplay}` : null}
            </ProductPrice>
            <USPsContainer usps={product.usp} />
            <ColorOptions fmyChipList={product.fmyChipList} />
            <EnergyLabel energyLabelGrade={product.energyLabelGrade} />
            <PillButton
              variant="primary"
              onClick={() => addToCart(product)}
              disabled={product.stockStatusText !== "inStock" || isInCart}
            >
              {getProductButtonText(product, isInCart)}
            </PillButton>
            <OutOfStockBanner stockStatusText={product.stockStatusText} />
          </InfoContainer>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default ProductDetailPage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CarouselContainer = styled.div`
  flex: 1;
  top: 20px;
  height: fit-content;

  @media (min-width: 768px) {
    margin-right: 20px;
  }

  @media (min-width: 1024px) {
    position: sticky;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 12px;

  @media (min-width: 768px) {
    max-width: 450px;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 20px;
`;
