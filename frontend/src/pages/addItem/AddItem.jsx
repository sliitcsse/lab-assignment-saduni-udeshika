import React from "react";

export default function AddItem() {
  const addItem = () => {};
  return (
    <div className="form">
      <div className="header">Add Item</div>
      <label>name:</label>
      <input type="text" />
      <br />
      <label>Description: </label>
      <input type="text" />
      <br />
      <br />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
