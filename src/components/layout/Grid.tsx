import React from "react";
import styled from "styled-components";

// Props interface
type GridProps = {
  children: React.ReactNode;
  $paddingtop?: string;
};

// React component
export const Grid: React.FC<GridProps> = ({ children, $paddingtop }) => {
  return <StyledGrid $paddingtop={$paddingtop}>{children}</StyledGrid>;
};

// CSS styled component under the component
const StyledGrid = styled.div<{ $paddingtop?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0px;
  padding-top: ${(props) => props.$paddingtop || "20px"};
`;
