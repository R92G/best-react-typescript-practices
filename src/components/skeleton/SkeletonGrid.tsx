import React from "react";
import { SkeletonCard } from "./SkeletonCard";
import { Grid } from "../Grid";
import { Container } from "../Container";

export const SkeletonGrid: React.FC = () => {
  return (
    <Container>
      <Grid paddingTop="120px">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </Grid>
    </Container>
  );
};
