import React from "react";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import "./UserInfo.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function UserInfo() {
  return (
    <div className="user-info_container">
      <ContactInformation />
      <ShippingAddress />
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="contact-info_container">
      <h3>Informações de contato</h3>
      <input type="email" placeholder="Email" />
    </div>
  );
}

function ShippingAddress() {
  const { emptyCart } = useCartActions();
  const cart = useCart();

  let navigate = useNavigate();

  function checkoutHandler() {
    if (cart.length < 1) {
      toast.error("Sua lista de compras está vazia");
      return;
    }
    let totalPrice = cart.reduce((acc, cur) => {
      return acc + cur.qty * cur.price;
    }, 0);
    if (totalPrice < 1) {
      toast.error("Não é possível processar o valor do pedido igual a zero (0).");
      return;
    }

    emptyCart();
    toast.success("Check-out");
    navigate("/");
  }

  return (
    <div className="shipping-address_container">
      <h3>Endereço para envio</h3>
      <div className="shipping-address_wrapper">
        <input type="name" placeholder="Primeiro nome" id="firstname" />
        <input type="name" placeholder="Sobrenome" id="lastname" />
        <input type="name" placeholder="Endereço" id="address" />
        <input type="name" placeholder="Cidade" id="city" />
        <button className="checkout-btn" onClick={checkoutHandler}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
