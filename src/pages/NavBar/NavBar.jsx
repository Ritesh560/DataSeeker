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
        <a
          href="https://www.linkedin.com/in/ritesh-kumar-bab761210/"
          alt=""
          target="_blank"
          className={styles.navLink}
          rel="noreferrer">
          About
        </a>
        <a
          href="mailto:singlaritesh008@gmail.com?subject=SendMail&body=Description"
          alt=""
          className={styles.navLink}>
          Contact us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
