import React from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
  display: flex;
  align-items: end;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StarIcon = styled.span`
  color: #ffcc00;
`;

interface StarRatingProps {
  rating?: string | null;
  count?: string | null;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, count }) => {
  const numericRating = Math.round(parseFloat(rating || "0"));

  if (isNaN(numericRating) || numericRating <= 0) {
    return null;
  }

  return (
    <RatingContainer>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i}>{i < numericRating ? "⭐" : "☆"}</StarIcon>
      ))}
      {count && <span> ({count})</span>}
    </RatingContainer>
  );
};
