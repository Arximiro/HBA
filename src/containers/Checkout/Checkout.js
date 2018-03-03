import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totalPrice = 0;
    for (let param of query.entries()) {
      // each param looks something like this [ 'meat', '1' ] 
      if(param[0] === 'price') {
        totalPrice = param[1];
      } else {
        ingredients[param[0]] = +param[1]; // since the value is a string adding + converts it to a number.
      }
    }
    this.setState({ ingredients, totalPrice });
  }

  handleCheckoutCancelled = () => {
    this.props.history.goBack();
  };

  handleCheckoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          handleCheckoutCancelled={this.handleCheckoutCancelled}
          handleCheckoutContinued={this.handleCheckoutContinued}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          render={(props) => <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />}
        />
      </div>
    )
  }
}

export default Checkout;
