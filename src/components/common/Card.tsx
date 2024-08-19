import React, { ReactNode } from "react";
import styled from "styled-components";

// Define individual props for the styles
interface CardProps {
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  paddingTop?: string;
  paddingbottom?: string;
  gap?: string;
}

// Card component that accepts individual style props
export const Card: React.FC<CardProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
  minHeight,
  minWidth,
  paddingTop,
  paddingbottom,
  padding,
  gap,
}) => {
  return (
    <CardContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      $minHeight={minHeight}
      $minWidth={minWidth}
      $paddingTop={paddingTop}
      $paddingbottom={paddingbottom}
      $padding={padding}
      $gap={gap}
    >
      {children}
    </CardContainer>
  );
};

// Styled component that accepts individual style props
const CardContainer = styled.div<{
  $minHeight?: string;
  $minWidth?: string;
  $paddingTop?: string;
  $paddingbottom?: string;
  $padding?: string;
  $gap?: string;
}>`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  min-height: ${(props) => props.$minHeight || "317px"};
  min-width: ${(props) => props.$minWidth || "300px"};
  background: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.$padding || "0px"};
  padding-top: ${(props) => props.$paddingTop || "3rem"};
  gap: ${(props) => props.$gap || "5rem"};
  padding-bottom: ${(props) => props.$paddingbottom || "1rem"};
`;
