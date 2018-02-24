import React, { Fragment } from 'react';

import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;
