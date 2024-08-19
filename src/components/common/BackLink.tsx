import React from "react";
import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";

interface BackLinkProps {
  to: string;
  label: string | undefined | null;
}

export const BackLink: React.FC<BackLinkProps> = ({ to, label }) => {
  return (
    <StyledLink href={to}>
      <BiChevronLeft /> {label || "Back"}
    </StyledLink>
  );
};

const StyledLink = styled("a")`
  display: inline-block;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  align-items: center;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
