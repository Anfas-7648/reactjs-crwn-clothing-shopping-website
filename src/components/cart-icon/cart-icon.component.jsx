import { ReactComponent as Shoppingicon } from "../../assets/115 - shopping-bag.svg";
import "./cart-icon.style.scss";
import { useContext } from "react";
import { CartConstext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartConstext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <Shoppingicon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
