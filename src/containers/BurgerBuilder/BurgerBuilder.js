import React, { Component, Fragment } from 'react';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const INGREDIENT_PRICES = {
  lettuce: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false
  };

  async componentDidMount() {
    try {
      const ingredients = await axios.get('/ingredients.json');
      this.setState({ ingredients: ingredients.data });
    } catch (e) {
    }    
  }

  handlePurchasing = () => {
    this.setState({ purchasing: true });
  };

  handleCancelPurchasing = () => {
    this.setState({ purchasing: false });
  };

  handleContinuePurchase = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
      // wrapping in encodedURIComponent adds space chars properly if needed
    }
    queryParams.push(`price=${this.state.totalPrice}`);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`
    });
    // ingredients are passed to the checkout component via query params in the url, which are populated by this method.
  };

  handlePurchaseState = (ing) => {
    const purchaseable = Object.values(ing).some(q => q > 0);
    this.setState({ purchaseable });
  };

  handleAddIngredient = (type) => {
    const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type]++;

    this.setState({ totalPrice, ingredients });
    this.handlePurchaseState(ingredients);
  };

  handleRemoveIngredient = (type) => {
    const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    const ingredients = {
      ...this.state.ingredients
    };
    if (this.state.ingredients[type] > 0) {
      ingredients[type]--;
    }

    this.setState({ totalPrice, ingredients });
    this.handlePurchaseState(ingredients);
  };

  render() {
    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          close={this.handleCancelPurchasing}
          loading={this.state.loading}
        >          
          {this.state.ingredients && !this.state.loading ?
            <OrderSummary
              ingredients={this.state.ingredients}
              total={this.state.totalPrice}
              cancelOrder={this.handleCancelPurchasing}
              continueOrder={this.handleContinuePurchase}
            /> :
            <Spinner />
          }
        </Modal>

        {this.state.ingredients ?
          <Burger
            ingredients={this.state.ingredients}
          /> :
          <Spinner /> 
        }
        
        
        {this.state.ingredients ?
          <BuildControls
            add={this.handleAddIngredient}
            remove={this.handleRemoveIngredient}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            purchasing={this.handlePurchasing}
          /> :
          <Spinner />
        }
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
