import React from 'react';
import styles from './NavBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logo} onClick={handleLogoClick}>
        DataSeeker
      </div>
      <div className={styles.navBtns}>
        <Link to={'/'} className={styles.navLink}>
          Home
        </Link>
        <Link to={'/editor'} className={styles.navLink}>
          Editor
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
