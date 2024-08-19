import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavoritesStore from "../../stores/useFavoritesStore";
import { Product } from "../../schemas/productSchema";

interface HeartButtonProps {
  product: Product;
}

// Use a transient prop by adding $ to the favorited prop to prevent it from being passed to the DOM
const FilledHeart = styled(AiFillHeart)<{ $favorited: boolean }>`
  fill: ${(props) => (props.$favorited ? "red" : "rgba(128, 128, 128, 0.7)")};
`;

export const HeartButton: React.FC<HeartButtonProps> = ({ product }) => {
  const hasFavorited = useFavoritesStore((state) =>
    state.hasFavorited(product.modelCode)
  );
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <HeartContainer
      onClick={(e) => {
        // Prevent the click event from bubbling up to the parent element
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(product);
      }}
    >
      <OutlineHeart size={28} />
      {/* Pass $favorited instead of favorited */}
      <FilledHeart size={24} $favorited={hasFavorited} />
    </HeartContainer>
  );
};

const HeartContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const OutlineHeart = styled(AiOutlineHeart)`
  position: absolute;
  top: -2px;
  right: -2px;
  fill: white;
`;
