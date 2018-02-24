import React from 'react';

import styles from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = ({ height }) => (
  <div className={styles.logo} style={{height}}>
    <img src={burgerLogo} alt="My Burger" />
  </div>
);

export default logo;
