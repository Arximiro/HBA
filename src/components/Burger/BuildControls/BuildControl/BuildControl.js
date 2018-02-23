import React from 'react';

import styles from './BuildControl.css';

const buildControl = ({ add, remove, disabled, label }) => (
  <div className={styles.buildControl}>
    <div className={styles.label}>{label}</div>
    <button
      className={styles.less}
      onClick={remove}
      disabled={disabled}
    >Less</button>
    <button
      className={styles.more}
      onClick={add}
    >More</button>
  </div>
);

export default buildControl;
