import React from "react";
import styled, { css } from "styled-components";

interface StatusMessageProps {
  message: string;
  type?: "info" | "error" | "normal"; // Default type to 'normal'
  resetFilters?: boolean;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({
  message,
  type = "normal",
}) => {
  return (
    <StatusMessageContainer type={type}>
      <Message>{message}</Message>
    </StatusMessageContainer>
  );
};

// Styled container with conditional styling based on the type
const StatusMessageContainer = styled.div<{
  type?: "info" | "error" | "normal";
}>`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: "Arial", sans-serif;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

  ${({ type }) =>
    type === "info" &&
    css`
      color: #1428a0;
    `}

  ${({ type }) =>
    type === "error" &&
    css`
      color: #d32f2f;
    `}

  ${({ type }) =>
    type === "normal" &&
    css`
      color: #333;
    `}
`;

// Error message styled as per Samsung branding
const Message = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 80%;
`;
