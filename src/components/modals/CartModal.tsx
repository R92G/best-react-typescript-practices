import useCartStore from "../../stores/useCartStore";
import { Modal } from "./Modal";
import { ProductListItem } from "../features/ProductListItem";
import { useMemo } from "react";
import { PillButton } from "../common/PillButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useCartModal from "../../stores/useCartModal";

export const CartModal = () => {
  const cartModal = useCartModal();

  // Destructuring here will cause the component to re-render on every change
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const navigate = useNavigate();

  const handleNavigate = (productSlug: string) => {
    cartModal.closeCart();
    navigate(`/products/${productSlug}`);
  };

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <Modal title="Cart" isOpen={cartModal.isOpen} onClose={cartModal.closeCart}>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <ProductListItem
                key={item.modelCode}
                thumbUrl={item.thumbUrl}
                name={item.displayName}
                price={(Number(item.price) * item.quantity).toFixed(2)}
                quantity={item.quantity}
                onRemove={() => removeFromCart(item.modelCode)}
                onIncrease={(e) => {
                  e.stopPropagation();
                  increaseQuantity(item.modelCode);
                }}
                onDecrease={(e) => {
                  e.stopPropagation();
                  decreaseQuantity(item.modelCode);
                }}
                onNavigate={() => handleNavigate(item.slug || "")}
              />
            ))}
          </ul>
          <hr />
          <TotalPriceContainer>
            Total: €{totalPrice.toFixed(2)}
          </TotalPriceContainer>
          <PillButton variant="primary">Checkout</PillButton>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </Modal>
  );
};

// Styled Components
const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  width: 100%;
  font-weight: bold;
  margin-bottom: 1rem;
`;
