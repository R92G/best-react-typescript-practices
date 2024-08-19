import styled from "styled-components";
import { motion } from "framer-motion";

interface PillButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  maxWidth?: string;
  marginTop?: string;
}

export const PillButton = styled(motion.button)<PillButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
  width: 100%;

  background-color: ${(props) =>
    props.variant === "secondary" ? "transparent" : "black"};
  color: ${(props) => (props.variant === "secondary" ? "black" : "white")};
  border: ${(props) =>
    props.variant === "secondary" ? "2px solid black" : "none"};

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed;
      opacity: 0.6;
  `}

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background-color: ${
        props.variant === "secondary" ? "rgba(0, 0, 0, 0.1)" : "#555"
      };
    `}
  }

  /* Handle additional styling from props */
  max-width: ${(props) => props.maxWidth || "auto"};
  margin-top: ${(props) => props.marginTop || "0"};
`;
