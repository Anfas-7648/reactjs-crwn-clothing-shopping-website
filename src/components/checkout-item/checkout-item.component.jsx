import "./checkout-item.scss";
import { useContext } from "react";
import { CartConstext } from "../../contexts/cart.context";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  const cost = price * quantity;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartConstext);
  const addProductToCart = () => addItemToCart(product);
  const removeProductToCart = () => removeItemFromCart(product);
  const clearItem = () => clearItemFromCart(product);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={removeProductToCart}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addProductToCart}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
      <div className="price">{cost}</div>
      <div className="remove-button " onClick={clearItem}>
        <ion-icon name="close-sharp"></ion-icon>
      </div>
    </div>
  );
};
export default CheckoutItem;
