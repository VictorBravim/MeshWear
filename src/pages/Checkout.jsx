import React from "react";
import "./Checkout.css";
import UserInfo from "../component/checkout/UserInfo";
import OrderSummary from "../component/checkout/OrderSummary";

function Checkout() {
  return (
    <div className="container checkout-container">
      <OrderSummary />
      <UserInfo />
    </div>
  );
}

export default Checkout;
