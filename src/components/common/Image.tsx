import React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  hovered?: boolean;
  maxWidth?: string;
  width?: string;
  height?: string;
  transition?: string;
  marginBottom?: string;
}

const StyledImage = styled.img<ImageProps>`
  max-width: ${(props) => props.maxWidth || "100%"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  display: block;
  transition: ${(props) => props.transition || "transform 0.3s ease"};
  transform: ${({ hovered }) => (hovered ? "scale(1.05)" : "scale(1)")};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

export const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  hovered,
  maxWidth,
  width,
  height,
  transition,
}) => {
  return (
    <StyledImage
      loading="lazy"
      src={src}
      alt={alt}
      hovered={hovered}
      maxWidth={maxWidth}
      width={width}
      height={height}
      transition={transition}
    />
  );
};
