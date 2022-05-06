import React, { useEffect } from "react";
import CartItem from "../../components/cartItem/CartItem";
import "./cart.css";

export default function Cart({ cartItems }) {
  useEffect(() => {
    console.log(cartItems);
  }, []);
  return (
    <div>
      <div className="header">Cart</div>
      <div className="cart-grid">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
