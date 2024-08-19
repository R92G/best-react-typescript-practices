import React from "react";
import { FaFilter } from "react-icons/fa";
import styled from "styled-components";

// Props for the FilterButton
interface FilterButtonProps {
  onClick: () => void;
}

// FilterButton Component
export const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <StyledFilterButton onClick={onClick}>
      <FaFilter size={20} />
      <FilterText>Open Filters</FilterText>
    </StyledFilterButton>
  );
};

// Styled Components
const StyledFilterButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
`;

const FilterText = styled.span`
  margin-left: 8px;
  font-size: 16px;
`;
