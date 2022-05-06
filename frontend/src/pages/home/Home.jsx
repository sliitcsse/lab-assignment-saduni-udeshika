import React from "react";
import Card from "../../components/card/Card";
import products from "../../constants/products";
import "./home.css";

export default function Home({ handleAddToCart }) {
  return (
    <div>
      <div className="header">Products</div>
      <div className="item-container">
        {products.map((item) => (
          <Card
            itemData={item}
            key={item.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
