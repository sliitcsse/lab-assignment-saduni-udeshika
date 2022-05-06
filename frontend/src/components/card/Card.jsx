import "./card.css";
import React from "react";

export default function Card({
  itemData,
  onClick,
  buttonLabel,
  secondaryButtonLabel,
  onSecondaryButtonClick,
}) {
  return (
    <div className="card">
      <div className="item-title">{itemData.itemName}</div>
      <div className="item-price">Rs: {itemData.price}</div>
      <button onClick={() => onClick()}>{buttonLabel}</button>
      {onSecondaryButtonClick && (
        <div>
          <button onClick={() => onClick()} style={{ marginTop: "6px" }}>
            {secondaryButtonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
