import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logo}>QueryHub</div>
    </div>
  );
};

export default NavBar;
