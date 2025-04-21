import Button from "./UI/Button.jsx";
import LogoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const uniqueItemsCount = cartCtx.items.length;

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={LogoImg} alt="a resturant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly={true}>
          Cart ({uniqueItemsCount})
        </Button>
      </nav>
    </header>
  );
}
