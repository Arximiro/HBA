import React, { Fragment } from 'react';

import styles from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = ({ ingredients, total, cancelOrder, continueOrder }) => {
  const ingredientSummary = Object.keys(ingredients).map(i =>
    <li key={i}>
      <span className={styles.span}>{i}</span>: {ingredients[i]}
    </li>
  );
  return (
    <Fragment>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {ingredientSummary}
    </ul>
    <p><strong>Total Price: ${total.toFixed(2)}</strong></p>
    <p>Continue to Checkout?</p>
    <Button btnType='danger' clicked={cancelOrder}>CANCEL</Button>
    <Button btnType='success' clicked={continueOrder}>CONTINUE</Button>    
  </Fragment>
  );  
};

export default orderSummary;
