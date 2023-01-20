import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
const Hats = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Fragment>
      <h1 className="item-heading">Hats</h1>
      <div className=" products-container">
        {products
          .filter((product) => product.type === "hats")
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </Fragment>
  );
};
export default Hats;
