import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

interface BannerProps {
  $backgroundColor?: string;
  $textColor?: string;
  $fullWidth?: boolean;
  promotions?: { promotionText: string }[] | null; // Expect an array of promotions
}

export const Banner: React.FC<BannerProps> = ({
  $backgroundColor = "#007bff",
  $textColor = "#ffffff",
  $fullWidth = true,
  promotions,
}) => {
  if (!promotions || promotions.length === 0) {
    return null;
  }

  return (
    <BannerContainer
      $backgroundColor={$backgroundColor}
      $textColor={$textColor}
      $fullWidth={$fullWidth}
    >
      {/* Safely parse and render the HTML string */}
      {parse(promotions[0].promotionText)}
    </BannerContainer>
  );
};

const BannerContainer = styled.div<{
  $backgroundColor: string;
  $textColor: string;
  $fullWidth: boolean;
}>`
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.colors.primary};
  color: ${({ $textColor }) => $textColor};
  text-align: center;
  padding: 1rem;

  margin-bottom: 2rem;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  box-sizing: border-box;
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;

  p {
    margin: 0;
    font-size: 1rem;
  }
`;
