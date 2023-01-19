import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
const Hats = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <h1>hats</h1>
      {/* {products
        .filter((product) => product.type === "hats")
        .map((hat) => (
          
        ))} */}
    </div>
  );
};
export default Hats;
