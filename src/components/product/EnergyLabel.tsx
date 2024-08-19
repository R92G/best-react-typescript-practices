import React from "react";
import styled from "styled-components";

interface EnergyLabelProps {
  energyLabelGrade?: string | null | undefined;
}

export const EnergyLabel: React.FC<EnergyLabelProps> = ({
  energyLabelGrade,
}) => {
  // Return null if no energy label energyLabelGrade is provided
  if (!energyLabelGrade) return null;

  return (
    <EnergyLabelWrapper>
      <EnergyLabelText>Energy Label:</EnergyLabelText>
      <EnergyLabelBox>{energyLabelGrade}</EnergyLabelBox>
    </EnergyLabelWrapper>
  );
};

// Styling for EnergyLabel component
const EnergyLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const EnergyLabelText = styled.span`
  margin-right: 10px;
  font-size: 1rem;
`;

const EnergyLabelBox = styled.div`
  border: 2px solid #007bff;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;
