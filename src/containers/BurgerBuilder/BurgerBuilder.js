import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  handlePurchasing = () => {
    this.setState({ purchasing: true });
  };

  handleCancelPurchasing = () => {
    this.setState({ purchasing: false });
  };

  handleContinuePurchase = () => {
    alert('You Continue!');
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
        >          
          <OrderSummary
            ingredients={this.state.ingredients}
            total={this.state.totalPrice}
            cancelOrder={this.handleCancelPurchasing}
            continueOrder={this.handleContinuePurchase}
          />
        </Modal>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls
          add={this.handleAddIngredient}
          remove={this.handleRemoveIngredient}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          purchasing={this.handlePurchasing}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
