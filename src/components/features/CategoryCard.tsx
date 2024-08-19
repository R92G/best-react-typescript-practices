import { useState } from "react";
import { Category } from "../../schemas/categorySchema";
import { PillButton } from "../common/PillButton";
import { useNavigate } from "react-router-dom";
import { Card } from "../common/Card";
import { ImageComponent } from "../common/Image";

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/categories/${category.slug}`)}
    >
      <h2>{category.categorySubTypeName}</h2>
      <ImageComponent
        src={category.thumbUrl}
        alt={category.categorySubTypeName}
        hovered={hovered}
        width="50%"
      />
      <PillButton
        variant="primary"
        position="absolute"
        maxWidth="140px"
        bottom="60%"
        opacity="0"
        initial={{ y: -60, opacity: 0 }}
        animate={hovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        View products
      </PillButton>
    </Card>
  );
};
