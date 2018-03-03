import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.css';

const checkoutSummary = ({ ingredients, handleCheckoutCancelled, handleCheckoutContinued }) => {
  return (
    <div className={styles.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div className={styles.burgerDiv}>
        <Burger ingredients={ingredients} />
      </div>
      <Button
        btnType="danger"
        clicked={handleCheckoutCancelled}>CANCEL</Button>
      <Button
        btnType="success"
        clicked={handleCheckoutContinued}>CONTINUE</Button>
    </div>
  )
};

export default checkoutSummary;
