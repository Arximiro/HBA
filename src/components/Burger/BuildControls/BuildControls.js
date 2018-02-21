import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css';

const controls = [
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={styles.buildControls}>
    {controls.map(c => (
      <BuildControl key={c.label} label={c.label} />
    ))}
  </div>
);

export default buildControls;
