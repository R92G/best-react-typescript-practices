import styled from "styled-components";

interface ContainerProps {
  $paddingTop?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  /* Dynamisch padding-top op basis van prop */
  padding-top: ${(props) => props.$paddingTop || "4rem"};

  padding-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row; /* Switch to row on tablet and larger screens */
    justify-content: space-between;
  }

  /* Standaard responsive breedtes voor verschillende schermgroottes */
  max-width: 100%;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
