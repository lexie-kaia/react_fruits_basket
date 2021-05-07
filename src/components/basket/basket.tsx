import React from 'react';
import Addform from 'components/basket/addform';
import Fruit from 'components/basket/fruit';
import TotalAndReset from 'components/basket/totalAndReset';

const Basket = () => {
  return (
    <div>
      <Addform />
      <ul>
        <Fruit />
        <Fruit />
      </ul>
      <TotalAndReset />
    </div>
  );
};

export default Basket;
