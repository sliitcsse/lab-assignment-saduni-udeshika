import React, { useEffect, useState } from "react";

export default function EditItem() {
  const [itemData, setItemData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    //load data
    setItemData({});
  };

  const saveEditData = async () => {
    //do the api call to save editted item data
  };

  return (
    <div className="form">
      <div className="header">Edit Item</div>
      <label>name:</label>
      <input type="text" value={itemData.name} onChange={(e) => {}} />
      <br />
      <label>Description: </label>
      <input type="text" value={itemData.description} onChange={(e) => {}} />
      <br />
      <br />
      <button onClick={saveEditData}>Save</button>
    </div>
  );
}
