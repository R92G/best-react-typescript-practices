import React from "react";
import styled from "styled-components";

// Props interface
type GridProps = {
  children: React.ReactNode;
  paddingTop?: string;
};

// React component
export const Grid: React.FC<GridProps> = ({ children, paddingTop }) => {
  return <StyledGrid paddingTop={paddingTop}>{children}</StyledGrid>;
};

// CSS styled component onder het component
const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0px;
  padding-top: ${(props) => props.paddingTop || "20px"};
`;
