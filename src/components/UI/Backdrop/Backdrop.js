import React from 'react';

import styles from './Backdrop.css';

const backdrop = ({ show, close }) => (
  show ?
    <div
      className={styles.backdrop}
      onClick={close}
    >
    </div> : null
);

export default backdrop;
