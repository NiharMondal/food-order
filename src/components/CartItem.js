import React from 'react';
import styles from '../assets/styles/cartItem.module.css'
const CartItem = ({item}) => {
  return (
    <div className="bg-light shadow p-3 mb-5 bg-white rounded">
      <div className="px-1 py-1 d-flex justify-content-between">
        <div className="d-flex align-itms-center">
          <img className={styles.cart_img} src={item.img} alt="" />
          <p>{item.title}</p>
        </div>
        <div>
          <p>$ {item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;