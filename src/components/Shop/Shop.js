import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const prevCart = productKeys.map((pdKey) => {
      const product = fakeData.find((pd) => pd.key === pdKey);
      product.quantity = savedCart[pdKey];
      return product;
    });
    setCart(prevCart);
  }, [product]);
  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find((pd) => pd.key === product.key);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="twin-container">
      <div className="product-container">
        <ul>
          {product.map((item) => (
            <Product
              showAddToCart={true}
              handleAddProduct={handleAddProduct}
              product={item}
              key={item.key}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
