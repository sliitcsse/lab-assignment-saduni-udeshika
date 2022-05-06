import React, { useEffect, useState } from "react";
import "./promotions.css";

export default function Promotions() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    loadPromotions();
  }, []);

  const loadPromotions = async () => {
    setPromotions([
      {
        id: "1",
        name: "Big sale",
        value: "15%",
        description: "Year end big sale",
      },
      {
        id: "2",
        name: "Big sale",
        value: "15%",
        description: "Year end big sale",
      },
    ]);
  };

  const addPromotion = async () => {};

  return (
    <div>
      <div className="header">Promotions</div>
      <div className="flex-row">
        <div className="promotion-container">
          {promotions.map((promotion) => (
            <div className="card" key={promotion.id}>
              <div>{promotion.name}</div>
              <div>{promotion.value}</div>
              <div>{promotion.description}</div>
            </div>
          ))}
        </div>
        <div className="add-promotion">
          <div className="header">Edit Item</div>
          <label>name:</label>
          <input type="text" />
          <br />
          <label>Description: </label>
          <input type="text" />
          <br />
          <br />
          <button onClick={addPromotion}>Save</button>
        </div>
      </div>
    </div>
  );
}
