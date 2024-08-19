import React from "react";
import { useCategories } from "../hooks/useCategories";
import { CategoryCard } from "../components/features/CategoryCard";
import { SkeletonGrid } from "../components/skeleton/SkeletonGrid";
import { StatusMessage } from "../components/common/StatusMessage";
import { Grid } from "../components/layout/Grid";
import { CenteredTitle } from "../components/layout/CenteredTitle";
import { Container } from "../components/layout/Container";

const CategoryPage: React.FC = () => {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return <SkeletonGrid />;
  }

  if (error) {
    return <StatusMessage type="error" message="Something went wrong." />;
  }

  // Show the empty state if there are no categories available
  if (!categories || categories.length === 0) {
    return (
      <StatusMessage
        type="info"
        message="No categories available at the moment."
      />
    );
  }

  return (
    <Container>
      <CenteredTitle level={1}>Our Product Lines</CenteredTitle>
      <Grid>
        {categories.map((category) => (
          <CategoryCard key={category.familyId} category={category} />
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
