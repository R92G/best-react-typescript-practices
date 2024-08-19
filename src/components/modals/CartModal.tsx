import useCartStore from "../../stores/useCartStore";
import { Modal } from "./Modal";
import useCartModal from "../../stores/useCartModal";

export const CartModal = () => {
  const cartModal = useCartModal();
  const { cartItems } = useCartStore();

  return (
    <Modal title="Cart" isOpen={cartModal.isOpen} onClose={cartModal.closeCart}>
      {cartItems.length > 0 ? <p>Cart has items</p> : <p>Your cart is empty</p>}
    </Modal>
  );
};

export default CartModal;
