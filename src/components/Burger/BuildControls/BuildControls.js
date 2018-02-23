import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({ add, remove, ingredients, price, purchaseable, purchasing }) => (
  <div className={styles.buildControls}>
    <p>Current Price <strong>${price.toFixed(2)}</strong></p>
    {controls.map(c => (
      <BuildControl
        key={c.label}
        label={c.label}
        add={() => add(c.type)}
        remove={() => remove(c.type)}
        disabled={ingredients[c.type] === 0}
      />
    ))}
    <button
      className={styles.orderButton}
      disabled={!purchaseable}
      onClick={purchasing}
    >ORDER NOW</button>
  </div>
);

export default buildControls;
