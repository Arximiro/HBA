import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.request.eject(this.resInterceptor)
    }

    handleErrorConfirmed = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.error}
            close={this.handleErrorConfirmed}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
};

export default withErrorHandler;

// This hoc wraps around the main container and allows us to handle errors.
// The custom axios instance created in axios-orders.js is passed into this hoc as an argument.
// Using interceptors, if an error response is sent back, that message is passed to the modal component.
// Then that error is displayed to the user so they know what went wrong.

// These interceptors are registered in the ComponentWillMount() lifecycle method.
// They are then ejected or removed from memory in ComponentWillUnmount() to prevent multiple copies of them incase this hoc is used on aother component.
