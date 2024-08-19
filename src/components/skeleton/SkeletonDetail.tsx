import React from "react";
import styled from "styled-components";
import { Container } from "../layout/Container";

export const SkeletonDetail: React.FC = () => {
  return (
    <Container $paddingTop="120px">
      <SkeletonDetailContainer>
        {/* Skeleton Banner - representing the carousel */}
        <SkeletonBanner />

        {/* Skeleton Text Container - representing the product details */}
        <SkeletonTextContainer>
          <SkeletonTitle />
          <SkeletonParagraph />
          <SkeletonParagraph />
          <SkeletonParagraph />
          <SkeletonButton />
        </SkeletonTextContainer>
      </SkeletonDetailContainer>
    </Container>
  );
};

const SkeletonDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  padding-top: 120px;

  @media (min-width: 768px) {
    flex-direction: row; /* Switch to row on tablet and larger screens */
  }
`;

const SkeletonBanner = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }

  @media (min-width: 768px) {
    width: 50%; /* Make the image take half the width on larger screens */
    height: auto; /* Adjust height automatically */
  }
`;

const SkeletonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    width: 50%; /* Take up half the width on larger screens */
  }
`;

const SkeletonTitle = styled.div`
  width: 70%;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`;

const SkeletonParagraph = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`;

const SkeletonButton = styled.div`
  width: 150px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;
`;
