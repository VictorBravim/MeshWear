import { ShoppingCart, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import toast from "react-hot-toast";
import "./SlidingCart.css";

function SlidingCart({ toggleShowCart }) {
  let cart = useCart();
  let { addProductQuantity, removeFromCart } = useCartActions();

  return (
    <div className={`sliding-cart_container`}>
      <CartTop toggleShowCart={toggleShowCart} />
      <CartMain
        cart={cart}
        addProductQuantity={addProductQuantity}
        removeFromCart={removeFromCart}
      />
      <CartCheckOut cart={cart} toggleShowCart={toggleShowCart} />
    </div>
  );
}

function CartTop({ toggleShowCart }) {
  return (
    <div className="cart-top">
      <ShoppingCart size={22} />
      <h2>Seu carrinho de compras</h2>
      <div className="close-shopping-cart" onClick={toggleShowCart}>
        <X size="22px" />
      </div>
    </div>
  );
}

function CartMain({ cart, addProductQuantity, removeFromCart }) {
  const products = cart.map((product) => {
    return (
      <CartProducts
        product={product}
        addProductQuantity={addProductQuantity}
        removeFromCart={removeFromCart}
        key={product.id}
      />
    );
  });

  return (
    <div className="cart-main_container">
      {products.length < 1 ? (
        <div style={{ textAlign: "center", fontSize: "1.6rem" }}>
          Seu carrinho está vazio :({" "}
        </div>
      ) : (
        products
      )}
    </div>
  );
}

function CartProducts({ product, addProductQuantity, removeFromCart }) {
  function incrementQuantity() {
    addProductQuantity(product.id, product.qty + 1);
  }

  function decrementQuantity() {
    if (product.qty > 1) {
      addProductQuantity(product.id, product.qty - 1);
    }
  }

  function removeProduct() {
    removeFromCart(product.id);
    toast.error("Removido do carrinho");
  }

  return (
    <div className="cart-product">
      <img src={product.image} alt={product.title} />
      <div className="cart-product_info">
        <h3>{product.title}</h3>
        <p>Categoria: {product.category}</p>
        <p className="qtd">
          Qtd:{" "}
          <button onClick={decrementQuantity} className="minus">-</button>
          <span>{product.qty}</span>
          <button onClick={incrementQuantity} className="maximus">+</button>
        </p>
      </div>
      <p className="cart-product_price">
        R${(product.price * product.qty).toFixed(2)}
      </p>
      <span className="cart-product_x" onClick={removeProduct}>
        <X size="16px" />
      </span>
    </div>
  );
}

function CartCheckOut({ cart, toggleShowCart }) {
  const totalPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price * current.qty;
  }, 0);

  return (
    <div className="cart-checkout_container">
      <h3>Checkout</h3>
      <p>R${totalPrice.toFixed(2)}</p>
      <Link to="checkout" onClick={toggleShowCart}>
        Finalizar Compra
      </Link>
    </div>
  );
}

export default SlidingCart;
