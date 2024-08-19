import useFavoritesStore from "../../stores/useFavoritesStore";
import { Modal } from "./Modal";
import { ProductListItem } from "../features/ProductListItem";
import { useNavigate } from "react-router-dom";
import useFavoritesModal from "../../stores/useFavoritesModal";

export const FavoritesModal = () => {
  const favoriteModal = useFavoritesModal();
  const { favoriteProducts, removeFavorite } = useFavoritesStore();
  const navigate = useNavigate();

  const handleNavigate = (productSlug: string) => {
    favoriteModal.closeFavorites();
    navigate(`/products/${productSlug}`);
  };

  return (
    <Modal
      title="Favorites"
      isOpen={favoriteModal.isOpen}
      onClose={favoriteModal.closeFavorites}
    >
      {favoriteProducts.length > 0 ? (
        <ul>
          {favoriteProducts.map((product) => (
            <ProductListItem
              key={product.modelCode}
              thumbUrl={product.thumbUrl}
              name={product.displayName}
              price={product.price ?? "N/A"}
              onRemove={() => removeFavorite(product.modelCode)}
              onNavigate={() => handleNavigate(product.slug || "")}
            />
          ))}
        </ul>
      ) : (
        <p>No favorite products</p>
      )}
    </Modal>
  );
};
