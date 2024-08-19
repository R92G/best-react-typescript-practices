import React from "react";
import styled from "styled-components";

interface CenteredTitleProps {
  level: number; // The integer that represents the hX level
  children: React.ReactNode;
}

export const CenteredTitle: React.FC<CenteredTitleProps> = ({
  level,
  children,
}) => {
  // Dynamically determine the heading tag
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <StyledTitle as={HeadingTag}>{children}</StyledTitle>;
};

const StyledTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center; /* Center the text horizontally */
`;
