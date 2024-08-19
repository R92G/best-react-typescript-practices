import styled from "styled-components";

interface HrProps {
  bgColor?: string;
}

export const Hr = styled.div<HrProps>`
  width: 80%;
  border: none;
  height: 1px;
  margin: 1rem 0;
  background-color: ${(props) => props.bgColor || "rgba(0, 0, 0, 0.0)"};
`;
