import React, { useState } from "react";
import fakeData from "../../../fakeData";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = () => {
    const newCart = [...cart, products];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>This is the list of Product</h1>
        <h4>{products.length}</h4>

        {products.map((pd) => (
          <Product product={pd} handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
