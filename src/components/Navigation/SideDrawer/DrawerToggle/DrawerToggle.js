import React from 'react';

import styles from './DrawerToggle.css';

const drawerToggle = ({ toggle }) => (
  <div
    className={styles.drawerToggle}
    onClick={toggle}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
