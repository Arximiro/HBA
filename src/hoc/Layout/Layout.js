import React, { Component, Fragment } from 'react';

import styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  
  handleToggleSidedrawer = () => {
    this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}));
  };

  handleCloseSidedrawer = () => {
    this.setState({showSideDrawer: false});
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          toggle={this.handleToggleSidedrawer}
        />
        <SideDrawer
          show={this.state.showSideDrawer}
          close={this.handleCloseSidedrawer} />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

export default Layout;
