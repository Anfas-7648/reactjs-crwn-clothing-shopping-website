import { ReactComponent as Shoppingicon } from "../../assets/115 - shopping-bag.svg";
import "./cart-icon.style.scss";
const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <Shoppingicon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
