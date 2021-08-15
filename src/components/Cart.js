import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import CartItem from "./CartItem";

const Cart = () => {
  const value = useContext(AppContext);
  const [cart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);
  return (
    <div className="pt-5">
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <h2>My order</h2>
          <li style={{ color: "red" }}>{new Date().toLocaleTimeString()}</li>
        </div>
        <p style={{ color: "#49d893" }}>Edit</p>
      </div>
      <div className="mt-5 py-3">
        {cart.length ? (
          cart.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <p>Your order list is empty</p>
        )}
      </div>
      <div>
        <p>
          <strong>Total: ${total}</strong>
        </p>
      </div>
      <div className="text-center mb-2">
        <Link
          style={{
            textDecoration: "none",
            padding: ".5rem 1rem",
            background: "#43D185",
            color: "#fff",
            borderRadius: "2rem",
          }}
          to="/checkout"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
