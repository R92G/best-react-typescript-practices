import React from "react";
import styled from "styled-components";

export const StyledUSPsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  align-self: flex-start;
  width: 100%;

  li {
    border-top: 1px solid #e0e0e0;
    padding: 1rem 0;
    text-align: left;
  }
`;

interface USPsContainerProps {
  usps?: string[] | null;
}

export const USPsContainer: React.FC<USPsContainerProps> = ({ usps }) => {
  // Als de usps array leeg, null of undefined is, render niets
  if (!usps || usps.length === 0) {
    return null;
  }

  return (
    <StyledUSPsContainer>
      {usps.map((usp, index) => (
        <li key={index}>{usp}</li>
      ))}
    </StyledUSPsContainer>
  );
};
