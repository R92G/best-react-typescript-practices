import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import placeholderImage from "../../assets/placeholder.jpg";

interface ProductListItemProps {
  thumbUrl?: string;
  name: string;
  price: string;
  quantity?: number;
  onRemove?: (e: React.MouseEvent) => void;
  onIncrease?: (e: React.MouseEvent) => void;
  onDecrease?: (e: React.MouseEvent) => void;
  onNavigate?: () => void;
}

export const ProductListItem: React.FC<ProductListItemProps> = ({
  thumbUrl,
  name,
  price,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
  onNavigate,
}) => {
  const handleOnRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.(e);
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIncrease?.(e);
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDecrease?.(e);
  };

  return (
    <ProductListContainer onClick={onNavigate}>
      <ImageWrapper>
        <ProductImage
          src={thumbUrl || placeholderImage} // Fallback image
          alt={name}
        />
      </ImageWrapper>
      <InfoWrapper>
        <ProductName onClick={onNavigate}>{name}</ProductName>
        <ProductPrice>{price}€</ProductPrice>
      </InfoWrapper>
      {quantity !== undefined && (
        <QuantityWrapper>
          <QuantityButton onClick={handleDecrease}>-</QuantityButton>
          <Quantity>{quantity}</Quantity>
          <QuantityButton onClick={handleIncrease}>+</QuantityButton>
        </QuantityWrapper>
      )}
      {onRemove && (
        <IoClose
          style={{ fontSize: "24px", cursor: "pointer", marginLeft: "10px" }}
          onClick={handleOnRemove}
        />
      )}
    </ProductListContainer>
  );
};

// Styled components
const ProductListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const InfoWrapper = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const ProductName = styled.p`
  margin: 0;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007aff;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  line-height: 1; // Ensures the text does not affect centering
  box-sizing: border-box; // Ensures padding and borders do not affect dimensions

  &:hover {
    background-color: #005bb5;
  }
`;

const Quantity = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;
