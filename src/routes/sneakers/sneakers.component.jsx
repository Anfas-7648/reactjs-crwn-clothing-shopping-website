import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
const Sneakers = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Fragment>
      <h1 className="item-heading">Sneakers</h1>
      <div className=" products-container">
        {products
          .filter((product) => product.type === "sneakers")
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </Fragment>
  );
};
export default Sneakers;
