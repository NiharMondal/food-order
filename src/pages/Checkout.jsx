import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import styles from '../assets/styles/checkout.module.css'
import { Link } from 'react-router-dom';

const Checkout = () => {
  const value = useContext(AppContext);
  const [cart,setCart] = value.cart;
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
  const reduction = (key) => {
    cart.forEach(item => {
      if (item.id === key) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    setCart([...cart])
  }
    const increase = (key) => {
      cart.forEach((item) => {
        if (item.id === key) {
          item.count += 1;
        }
      });
      setCart([...cart]);
  };
  const removeFood = (key) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item.id === key) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };
  return (
    <div className="p-5 container">
      <Link
        style={{
          textDecoration: "none",
          padding: ".5rem 1rem",
          background: "#43D185",
          color: "#fff",
          borderRadius: ".3rem",
        }}
        to="/menu"
      >
        Back home
      </Link>
      <h3 className="py-2">Full details</h3>
      {
        cart.map(item => {
          return (
            <div className="row text-center d-flex align-items-center mb-1" key={item.id}>
              <div className="col-12 col-md-6 ">
                <img
                  className={`${styles.img} img-fluid`}
                  src={item.img}
                  alt=""
                />
              </div>
              <div className=" col-12 col-md-6">
                <h4>{item.title}</h4>
                <h5>Price: ${ item.price}</h5>
                <p>{item.description}</p>
                <div>
                  <button className={styles.cmn_btn} onClick={()=>reduction(item.id)}> - </button>
                  <button className={styles.cmn_btn} > {item.count} </button>
                  <button className={styles.cmn_btn} onClick={() => increase(item.id)}> +</button> <br />
                  <button className={styles.remove_btn} onClick={()=>removeFood(item.id)}>Remove food</button>
                </div>
              </div>
            </div>
          );
        })
      }
      <div className="text-end">
        <p>
          <strong>Total: </strong> ${total}
        </p>
      </div>
    </div>
  );
};

export default Checkout;