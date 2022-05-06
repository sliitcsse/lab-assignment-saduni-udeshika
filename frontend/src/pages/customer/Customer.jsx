import React, { useEffect, useState } from "react";

export default function Customer() {
  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    loadCustomer();
  }, []);

  const loadCustomer = () => {
    //load customer from the api
    setCustomerData({
      firstName: "Dinura",
      lastName: "imesh",
      email: "dinuraimesh@gmail.com",
    });
  };

  return (
    <div>
      <div className="header">Customer</div>
      <div style={{ marginLeft: "10px" }}>
        <div>First Name: {customerData.firstName}</div>
        <div>Last Name: {customerData.lastName}</div>
        <div>Email: {customerData.email}</div>
      </div>
    </div>
  );
}
