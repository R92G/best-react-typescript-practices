import React from "react";
import styled from "styled-components";

// Styles voor de huidige prijs (CurrentPrice)
export const CurrentPrice = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

// Styles voor de oude prijs (OldPrice)
export const OldPrice = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  color: #888;
`;

// Container voor de prijzen
export const PriceContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem 0;
`;

interface PriceContainerProps {
  currentPrice?: string | null;
  oldPrice?: string | null;
}

// Reusable PriceContainer component
export const PriceContainer: React.FC<PriceContainerProps> = ({
  currentPrice,
  oldPrice,
}) => {
  // Als currentPrice null of undefined is, render niets
  if (!currentPrice) {
    return null;
  }

  return (
    <PriceContainerWrapper>
      <CurrentPrice>{currentPrice}</CurrentPrice>
      {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
    </PriceContainerWrapper>
  );
};
