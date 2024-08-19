import React from "react";
import { SkeletonCard } from "./SkeletonCard";
import { Grid } from "../layout/Grid";
import { Container } from "../layout/Container";

export const SkeletonGrid: React.FC = () => {
  return (
    <Container>
      <Grid $paddingtop="140px">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </Grid>
    </Container>
  );
};
