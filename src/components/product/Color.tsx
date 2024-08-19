import React from "react";
import styled from "styled-components";

interface ColorOption {
  fmyChipCode: string;
  fmyChipType: string;
  fmyChipName: string;
}

interface ColorOptionsProps {
  fmyChipList?: ColorOption[] | null;
}

export const ColorOptions: React.FC<ColorOptionsProps> = ({ fmyChipList }) => {
  // filter the color chips to display only the colors
  const colorChips = fmyChipList?.filter(
    (chip) => chip.fmyChipType === "COLOR"
  );

  // if there are no color chips, return null
  if (!colorChips || colorChips.length === 0) {
    return null;
  }

  return (
    <OptionsContainer>
      {colorChips.map((color, index) => (
        <ColorOption key={index}>
          <ColorCircle color={color.fmyChipCode} />
          <ColorLabel>{color.fmyChipName}</ColorLabel>
        </ColorOption>
      ))}
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  width: fit-content;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #007bff;
`;

const ColorOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background-color: white;
`;

const ColorCircle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

const ColorLabel = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;
