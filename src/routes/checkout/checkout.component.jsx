import "./checkout.style.scss";
import { useContext } from "react";
import { CartConstext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const CheckOut = () => {
  const { cartItems, totalAmount } = useContext(CartConstext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div>
          <h1 className=" header-block">product</h1>
        </div>
        <div>
          <h1 className=" header-block">Description</h1>
        </div>
        <div>
          <h1 className=" header-block">Quantity</h1>
        </div>
        <div>
          <h1 className=" header-block">Price</h1>
        </div>
        <div>
          <h1 className=" header-block">Remove</h1>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} product={cartItem} />
      ))}
      <span className="total">Total : {totalAmount}</span>
    </div>
  );
};
export default CheckOut;
