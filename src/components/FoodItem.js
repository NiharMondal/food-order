import React, { useContext } from "react";
import styles from "../assets/styles/foodItem.module.css";
import { AppContext } from "../context";

const FoodItem = ({ food, bgColor }) => {
  const { id, img, title, price } = food;
  const value = useContext(AppContext);
  const addToCart = value.addToCart;
  
  return (
    <div
      className="col-md-4 col-6"
      style={{ background: bgColor, marginBottom: ".4rem" }}
    >
      <div style={{ padding: ".5rem" }}>
        <img
          src={img}
          className={`${styles.img_style} img-fluid`}
          alt="food name"
        />
        <h6 className="text-start">{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <h6>$ {price}</h6>
          <button className={styles.add_btn} onClick={()=>addToCart(id)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
