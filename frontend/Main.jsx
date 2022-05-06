import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./src/pages/cart/Cart";
import Navbar from "./src/components/navbar/Navbar";
import Home from "./src/pages/home/Home";
import AuthContainer from "./src/components/authContainer/AuthContainer";

export default function Main() {
  const [items, setItems] = useState([]);

  //Add to Cart
  const handleAddCart = (cardItem) => {
    const exist = items.find((item) => item.id === cardItem.id);
    if (exist) {
      setItems(
        items.map((item) =>
          item.id === cardItem.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...cardItem, quantity: 1 }]);
    }
    console.log(items);
  };
  return (
    <AuthContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home handleAddToCart={handleAddCart} />} />
          <Route path="/cart" element={<Cart cartItems={items} />} />
        </Routes>
      </Router>
    </AuthContainer>
  );
}
