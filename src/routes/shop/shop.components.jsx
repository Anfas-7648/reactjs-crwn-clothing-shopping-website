import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.style.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  let init = 0;
  let newJacket = [];
  let newMen = [];
  let newWomen = [];
  let newSneaker = [];
  let newHat = [];
  const { products } = useContext(ProductsContext);
  const mensProducts = products.filter((items) => items.type === "men");
  const womensProducts = products.filter((items) => items.type === "women");
  const sneakersProducts = products.filter(
    (items) => items.type === "sneakers"
  );
  const jacketsProducts = products.filter((items) => items.type === "jackets");
  const hatsProducts = products.filter((items) => items.type === "hats");

  if (init === 0) {
    for (let i = 0; i < 4; i++) {
      newHat.push(hatsProducts[i]);
      newJacket.push(jacketsProducts[i]);
      newMen.push(mensProducts[i]);
      newWomen.push(womensProducts[i]);
      newSneaker.push(sneakersProducts[i]);
    }
    init = 1;
  }

  return (
    <div className="main-shop-container">
      <div className="shops-mini-container">
        <Link className="nav-link" to="/hats">
          <h1 className="shop-heading">Hats</h1>
        </Link>
        <div className=" products-container">
          {newHat.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="shops-mini-container">
        <Link className="nav-link" to="/jackets">
          <h1 className="shop-heading">Jackets</h1>
        </Link>

        <div className=" products-container">
          {newJacket.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="shops-mini-container">
        <Link className="nav-link" to="/sneakers">
          <h1 className="shop-heading">Sneakers</h1>
        </Link>

        <div className=" products-container">
          {newSneaker.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="shops-mini-container">
        <Link className="nav-link" to="/mens">
          <h1 className="shop-heading">Men</h1>
        </Link>
        <div className=" products-container">
          {newMen.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="shops-mini-container">
        <Link className="nav-link" to="/womens">
          <h1 className="shop-heading"> Women</h1>
        </Link>
        <div className=" products-container">
          {newWomen.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
