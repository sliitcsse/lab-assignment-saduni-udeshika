import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPurchases();
  }, []);

  const loadPurchases = () => {
    //load from api
    setPurchases([
      {
        id: "1",
        customerId: "1",
        customerName: "Dinura",
        products: [
          { name: "Iron", qnty: 2 },
          { name: "Table", qnty: 1 },
        ],
      },
    ]);
  };

  const viewCustomer = (purchase) => {
    navigate(`/customer/${purchase.customerId}`, {});
  };

  return (
    <div>
      <div className="header">Purchases</div>
      {purchases.map((purchase) => (
        <div key={purchase.id} className="card">
          <div>Invoice No: {purchase.id}</div>
          <div>customerName : {purchase.customerName}</div>
          <div>products : {purchase.products.length}</div>
          <br />
          <button onClick={() => viewCustomer(purchase)}>View Customer</button>
        </div>
      ))}
      ;
    </div>
  );
}
