import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";

/**
 * Reusable Modal Component
 *
 * The header and footer will stick to the top and bottom of the modal.
 */

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  footer,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  //   This use effects makes sure it only animates when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <Overlay>
      <Container>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </Header>
        <Content>{children}</Content>
        {footer && <Footer>{footer}</Footer>}
      </Container>
    </Overlay>
  );
};

const intro = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div`
  background: white;
  border-radius: 12px; /* Ensure border-radius is applied */
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevents overflow from affecting the border-radius */
  animation: ${intro} 0.4s ease forwards;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  flex-shrink: 0;
`;

const Title = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const Content = styled.div`
  padding: 16px;
  overflow-y: auto;
  flex-grow: 1;
`;

const Footer = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  flex-shrink: 0;
`;
