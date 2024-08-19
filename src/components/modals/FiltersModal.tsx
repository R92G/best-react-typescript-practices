import React from "react";
import { Modal } from "./Modal";
import { useFiltersStore } from "../../stores/useFiltersStore";
import styled from "styled-components";
import { Hr } from "../common/Hr";
import { PillButton } from "../common/PillButton";

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FiltersModal: React.FC<FiltersModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Destructuring directly will cause a re-render on every state change
  const filters = useFiltersStore((state) => state.filters);
  const setFilter = useFiltersStore((state) => state.setFilter);
  const applyFilters = useFiltersStore((state) => state.applyFilters);
  const clearFilters = useFiltersStore((state) => state.clearFilters);

  const handleApplyFilters = () => {
    applyFilters(filters); // Apply the current filters
    onClose();
  };

  const handleClearFilters = () => {
    clearFilters(); // Clear all filters
    onClose();
  };

  const footer = (
    <div className="button-container">
      <PillButton onClick={handleApplyFilters}>Apply Filters</PillButton>
      <PillButton
        marginTop="1rem"
        variant="secondary"
        onClick={handleClearFilters}
      >
        Reset filters
      </PillButton>
    </div>
  );

  return (
    <Modal
      footer={footer}
      title="Filter Products"
      isOpen={isOpen}
      onClose={onClose}
    >
      <FiltersWrapper>
        <FilterSection>
          <FilterTitle>Prijs:</FilterTitle>
          <OptionsWrapper>
            <Option>
              <StyledRadio
                type="radio"
                name="price"
                checked={
                  filters.minPrice === null && filters.maxPrice === "500"
                }
                onChange={() => {
                  setFilter("minPrice", null);
                  setFilter("maxPrice", "500");
                }}
              />
              Minder dan €500
            </Option>
            <Option>
              <StyledRadio
                type="radio"
                name="price"
                checked={
                  filters.minPrice === "500" && filters.maxPrice === "1000"
                }
                onChange={() => {
                  setFilter("minPrice", "500");
                  setFilter("maxPrice", "1000");
                }}
              />
              €500 - €1000
            </Option>
            <Option>
              <StyledRadio
                type="radio"
                name="price"
                checked={
                  filters.minPrice === "1000" && filters.maxPrice === "1500"
                }
                onChange={() => {
                  setFilter("minPrice", "1000");
                  setFilter("maxPrice", "1500");
                }}
              />
              €1000 - €1500
            </Option>
            <Option>
              <StyledRadio
                type="radio"
                name="price"
                checked={
                  filters.minPrice === "1500" && filters.maxPrice === "Infinity"
                }
                onChange={() => {
                  setFilter("minPrice", "1500");
                  setFilter("maxPrice", "Infinity");
                }}
              />
              Meer dan €1500
            </Option>
          </OptionsWrapper>
          <Hr bgColor="#f4f4f4" />
        </FilterSection>

        <FilterSection>
          <FilterTitle>Minimum Rating:</FilterTitle>
          <OptionsWrapper>
            <Option>
              <StyledRadio
                type="radio"
                name="rating"
                checked={filters.minRating === "3.5"}
                onChange={() => setFilter("minRating", "3.5")}
              />
              3.5+
            </Option>
            <Option>
              <StyledRadio
                type="radio"
                name="rating"
                checked={filters.minRating === "4.0"}
                onChange={() => setFilter("minRating", "4.0")}
              />
              4.0+
            </Option>
            <Option>
              <StyledRadio
                type="radio"
                name="rating"
                checked={filters.minRating === "4.5"}
                onChange={() => setFilter("minRating", "4.5")}
              />
              4.5+
            </Option>
          </OptionsWrapper>
          <Hr bgColor="#f4f4f4" />
        </FilterSection>

        <FilterSection>
          <Option>
            <StyledCheckbox
              type="checkbox"
              checked={filters.inStock === true}
              onChange={() => setFilter("inStock", !filters.inStock)}
            />
            In Stock
          </Option>
          <Hr bgColor="#f4f4f4" />
        </FilterSection>

        <FilterSection>
          <FilterTitle>Energielabel:</FilterTitle>
          <OptionsWrapper>
            {["A", "B", "C", "D", "E", "F", "G"].map((label) => (
              <Option key={label}>
                <StyledRadio
                  type="radio"
                  name="energyLabel"
                  checked={filters.energyLabel === label}
                  onChange={() => setFilter("energyLabel", label)}
                />
                {label}
              </Option>
            ))}
          </OptionsWrapper>
        </FilterSection>
      </FiltersWrapper>
    </Modal>
  );
};

// Styled Components
const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Option = styled.label`
  font-size: 12px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000; /* Black border for the radio button */
  display: inline-block;
  position: relative;
  margin-right: 10px;

  &:checked::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #000; /* Black for the checked radio button */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #000; /* Black for checkbox */
  width: 20px;
  height: 20px;
`;
