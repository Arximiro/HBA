import React from 'react';

import styles from './Button.css';

const button = (props) => (
  <button
  className={`${styles.button} ${styles[props.btnType]}`}
  onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
