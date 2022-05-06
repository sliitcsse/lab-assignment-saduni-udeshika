import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./src/pages/cart/Cart";
import Navbar from "./src/components/navbar/Navbar";
import Home from "./src/pages/home/Home";
import AuthContainer from "./src/components/authContainer/AuthContainer";
import Inventory from "./src/pages/inventory/Inventory";
import AddItem from "./src/pages/addItem/AddItem";
import EditItem from "./src/pages/editItem/EditItem";
import Purchases from "./src/pages/purchases/Purchases";
import Customer from "./src/pages/customer/Customer";
import Promotions from "./src/pages/promotions/Promotions";

export default function Main() {
  const [items, setItems] = useState([]);
  const [userData, setUserData] = useState({ type: "customer" });
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
    <AuthContainer
      onAuth={(userData) => {
        setUserData(userData);
      }}
    >
      <Router>
        <Navbar userData={userData} />
        <Routes>
          <Route
            path="/"
            element={
              userData.type === "customer" ? (
                <Home handleAddToCart={handleAddCart} />
              ) : (
                <Inventory />
              )
            }
          />
          <Route path="/signup" element={<div />} />
          <Route path="/cart" element={<Cart cartItems={items} />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/edit-item/:id" element={<EditItem />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/customer/:id" element={<Customer />} />
          <Route path="/promotions" element={<Promotions />} />
        </Routes>
      </Router>
    </AuthContainer>
  );
}
