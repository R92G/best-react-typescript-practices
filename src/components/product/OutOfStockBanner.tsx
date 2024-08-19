import React from "react";
import styled from "styled-components";

interface OutOfStockBannerProps {
  stockStatusText?: string | null; // Optioneel, zoals aangegeven in het schema
}

export const OutOfStockBanner: React.FC<OutOfStockBannerProps> = ({
  stockStatusText,
}) => {
  // Als het product op voorraad is, render niets
  if (stockStatusText === "inStock") {
    return null;
  }

  // Anders, render de banner
  return <Banner>Not in stock</Banner>;
};

// Styled component voor de banner
const Banner = styled.div`
  color: #dc3545;
  text-align: center;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 14px;
`;
