import React, { Fragment } from 'react';

import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;
