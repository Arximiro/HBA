import React, { Fragment } from 'react';

import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const style = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  }
  return (
    <Fragment>
      <Backdrop
        show={props.show}
        close={props.close}
      />
      <div
        style={style}
        className={styles.modal}
      >
        {props.children}
      </div>
    </Fragment>
  )
};

export default modal;
