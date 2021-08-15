import React from 'react';
import styles from '../assets/styles/sidebar.module.css';
import {  NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className="text-center pt-5 ">
        <NavLink className={styles.navlink} activeClassName="active_navlink" to="/menu">
          menu
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;