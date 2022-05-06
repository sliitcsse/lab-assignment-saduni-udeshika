import React from "react";
import "./cartItem.css";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div>{item.itemName}</div>
      <div>{item.quantity}</div>
    </div>
  );
}
