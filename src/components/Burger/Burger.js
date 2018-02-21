import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.css';

const burger = ({ ingredients }) => {
  const ingreds = Object.keys(ingredients).map(i => {
    return [...Array(ingredients[i])].map((_, index) => 
    <BurgerIngredient
      key={i + index}
      type={i}
    />
    );
  }).reduce((array, element) => [...array, ...element], []);

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingreds.length > 0 ? ingreds : <p>Please start adding ingedients</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

// const ingreds = Object.keys(ingredients).map(i => {
//   return [...Array(ingredients[i])].map((_, index) => 
//   <BurgerIngredient
//     key={i + index}
//     type={i}
//   />
//   );
// }).reduce((array, element) => [...array, ...element], []);

//  --- Explanation ---

// Object.keys() takes in an object and returns an array where each element is one of the Keys from that object. Values are not part of the array.
// So it produces something like this. [lettuce, bacon, cheese, meat]

// ingredients comes in via props and is an object with the user's currently selected ingredients.
// So it looks something like this. {lettuce: 1, bacon: 1, cheese: 2, meat: 2}

// Object.Keys() creats an array of just the ingredient names.

// That array is mapped over, for each element a new array is returned, with x spots, where x is the value from the ingredients props object at that element's key.
// So it produces something like this. [meat, meat] in the value of meat was 2 in the ingredients object.

// Then that array is mapped over, grabbing the index and returning a new array of BurgerIngredient components for each element in the array. So for [meat, meat] that would be 2.
// So it produces something like this. [ [<BurgerIngredient key={meat0} type={meat} />, <BurgerIngredient key={meat1} type={meat} />] ]
// An array or arrays essentially for each ingredient type.

// reduce() takes two arguments. First the array, and second each element's value.
// To simplify it can be read as it takes each array, iterates over its elements, concatting them to the new array. Essentially flattening the array or arrays out.
// So in the end it produces a single array of BurdgerIngedients instead of an array or arrays.

// [ [<BurgerIngredient key={meat0} type={meat} />, <BurgerIngredient key={meat1} type={meat} />], [<BurgerIngredient key={cheese0} type={cheese} />] ]  BECOMES
// [ <BurgerIngredient key={meat0} type={meat} />, <BurgerIngredient key={meat1} type={meat} />, <BurgerIngredient key={cheese0} type={cheese} /> ]

// Lastly that array of components is rendered between the buns of the sandwich so it can be rendered to the screen.
