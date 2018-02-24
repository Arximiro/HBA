import React, { Component, Fragment } from 'react';

import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const style = {
      transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: this.props.show ? '1' : '0'
    }
    return (
      <Fragment>
        <Backdrop
          show={this.props.show}
          close={this.props.close}
        />
        <div
          style={style}
          className={styles.modal}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
