import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../assets/styles/menu.module.css';
import Food from '../components/Food.js'
import Cart from '../components/Cart';
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2">
            <Sidebar />
          </div>
          <div className="col-12 col-md-7  pt-3">
            <div className="text-end">
              <i className="fas fa-filter"></i> <span>Filter</span>
            </div>
            <div className="mt-5 text-end">
              <small >Sort by Recommended</small>
              <Food/>
            </div>
          </div>
          <div className="col-12 col-md-3 pt-5">
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;