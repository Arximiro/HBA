import React from 'react';

import styles from './Order.css';

const order = (props) => (
  <div className={styles.order}>
    <p>Ingredients: Lettuce (1)</p>
    <p>Price: <strong>USD $5.45</strong></p>    
  </div>
);

export default order;
