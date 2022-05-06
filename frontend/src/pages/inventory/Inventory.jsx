import React from "react";
import products from "../../constants/products";
import Card from "../../components/card/Card";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">Inventory</div>
      <div className="item-container">
        {products.map((item) => (
          <Card
            itemData={item}
            key={item.id}
            onClick={() => navigate(`/edit-item/${item.id}`)}
            buttonLabel="Edit Item"
          />
        ))}
      </div>
    </div>
  );
}
