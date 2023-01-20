import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
const Jackets = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Fragment>
      <h1 className="item-heading">Jackets</h1>
      <div className=" products-container">
        {products
          .filter((product) => product.type === "jackets")
          .map((hat) => (
            <ProductCard key={hat.id} product={hat} />
          ))}
      </div>
    </Fragment>
  );
};
export default Jackets;
