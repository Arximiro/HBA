import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ({ toggle }) => (
  <header className={styles.toolbar}>
    <DrawerToggle toggle={toggle} />
    <div className={styles.logo}>
      <Logo />
    </div>
    
    <nav className={styles.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
