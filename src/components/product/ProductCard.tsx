import React from "react";
import { PillButton } from "../common/PillButton";
import { ImageComponent } from "../common/Image";
import { ProductTitle } from "./ProductTitle";
import { Product } from "../../schemas/productSchema";
import { PriceContainer } from "./PriceContainer";
import { USPsContainer } from "./UspContainer";
import { Card } from "../common/Card";
import { Hr } from "../common/Hr";
import { StarRating } from "./StarRating";
import { HeartButton } from "../features/HeartButton";
import { useNavigate } from "react-router-dom";
import { getProductButtonText } from "../../lib/utils";
import styled from "styled-components";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = (productSlug: string | undefined) => {
    navigate(`/products/${productSlug}`);
  };

  return (
    <Card
      onClick={() => handleNavigate(product.slug)}
      gap="0px"
      padding="2rem"
      paddingBottom="2rem"
    >
      <HeartButton product={product} />
      {/* Flex container to align title, image, and price */}
      <ContentWrapper>
        <ProductTitle>{product.displayName}</ProductTitle>
        <ImageComponent
          maxWidth="150px"
          marginBottom="1rem"
          height="auto"
          src={product.thumbUrl}
          alt={product.displayName}
        />
        <PriceContainer
          currentPrice={product.priceDisplay}
          oldPrice={product.listPriceDisplay}
        />
      </ContentWrapper>

      <StarRating rating={product.ratings} count={product.reviewCount} />
      <Hr />
      <USPsContainer usps={product.usp} />

      <ButtonContainer>
        <PillButton
          variant="primary"
          disabled={product.stockStatusText !== "inStock"}
        >
          {getProductButtonText(product, false)}
        </PillButton>
        <PillButton variant="secondary">View product</PillButton>
      </ButtonContainer>
    </Card>
  );
};

// Styled Components

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
  gap: 0.5rem;
`;
