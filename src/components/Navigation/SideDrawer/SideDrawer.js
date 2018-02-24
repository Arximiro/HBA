import React, { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.css';

const sideDrawer = ({ show, close }) => {
  let attachedStyles = [styles.sideDrawer, styles.close];
  if (show) {
    attachedStyles = [styles.sideDrawer, styles.open]
  }
  return (
    <Fragment>
      <Backdrop
        show={show}
        close={close}
      />
      <div className={attachedStyles.join(' ')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
