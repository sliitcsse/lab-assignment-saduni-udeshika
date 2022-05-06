import React, { useEffect } from "react";
import CartItem from "../../components/cartItem/CartItem";
import "./cart.css";

export default function Cart({ cartItems }) {
  useEffect(() => {
    console.log(cartItems);
  }, []);

  const purchase = async () => {};

  return (
    <div>
      <div className="header">Cart</div>
      <div className="cart-grid">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      {cartItems.length > 0 && (
        <button style={{ margin: "12px 0 0 6px" }} onClick={purchase}>
          Purchase
        </button>
      )}
    </div>
  );
}
