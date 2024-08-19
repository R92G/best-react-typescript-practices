import useCartStore from "../../stores/useCartStore";
import { Modal } from "./Modal";
import { ProductListItem } from "../features/ProductListItem";
import useCartModal from "../../stores/useCartModal";

export const CartModal = () => {
  const cartModal = useCartModal();
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Modal title="Cart" isOpen={cartModal.isOpen} onClose={cartModal.closeCart}>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <ProductListItem
              key={item.modelCode}
              thumbUrl={item.thumbUrl}
              name={item.displayName}
              price={(Number(item.price) * item.quantity).toFixed(2)}
              quantity={item.quantity}
            />
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </Modal>
  );
};

export default CartModal;
