import { useContext } from "react";
import Modal from "./UI/Modal.jsx";

import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleClose() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleClose : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIcrease={() => cartCtx.addItem(item)}
            onDescrese={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
