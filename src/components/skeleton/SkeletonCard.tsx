import React from "react";
import styled from "styled-components";

const SkeletonCardContainer = styled.div`
  background-color: #e0e0e0;
  width: auto;
  height: 317px;
  border-radius: 8px;
  margin-bottom: 20px;
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
`;

export const SkeletonCard: React.FC = () => {
  return <SkeletonCardContainer />;
};
