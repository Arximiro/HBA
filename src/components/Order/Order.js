import React from 'react';

import styles from './Order.css';

const order = ({ price, ingredients }) => {
  const ingredientsSummary = [];

  // ingredients is an object, when iterating with a for loop, the variable ing is the property name.
  // So with ingredienrs[ingredientName] the value of the property at position ing is the number of that type of ingredient.
  for (let ing in ingredients) {
    ingredientsSummary.push({
      name: ing,
      amount: ingredients[ing]
      }
    );
  }
  return (
    <div className={styles.order}>
      <p>A tasty burger with the following specs was ordered!</p>
      {ingredientsSummary.map(ing =>
        <span
          key={ing.name}
          className={styles.orderSpan}
        >
          {ing.name}: {ing.amount}</span>)}      
      <p>Price: <strong>{price.toFixed(2)}</strong></p>
    </div>
  );
}

export default order;
