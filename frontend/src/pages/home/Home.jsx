import React from "react";
import Card from "../../components/card/Card";
import products from "../../constants/products";
import "./home.css";

export default function Home({ handleAddToCart }) {
  const addToWishList = async () => {};

  return (
    <div>
      <div className="header">Products</div>
      <div className="item-container">
        {products.map((item) => (
          <Card
            itemData={item}
            key={item.id}
            onClick={() => handleAddToCart(item)}
            buttonLabel="Add To Cart"
            onSecondaryButtonClick={addToWishList}
            secondaryButtonLabel="Add To Wishlist"
          />
        ))}
      </div>
    </div>
  );
}
