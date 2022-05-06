import "./card.css";
import React from "react";

export default function Card({ itemData, handleAddToCart }) {
  return (
    <div className="card">
      <div className="item-title">{itemData.itemName}</div>
      <div className="item-price">Rs: {itemData.price}</div>
      <button onClick={() => handleAddToCart(itemData)}>Add to Cart</button>
    </div>
  );
}
