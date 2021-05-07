import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Fruit } from 'types/types';
import Addform from 'components/basket/addform';
import Item from 'components/basket/item';
import TotalAndReset from 'components/basket/totalAndReset';

const Basket = () => {
  const [basket, setBasket] = useState<Fruit[]>([
    { id: uuid(), name: 'apple', count: 0 },
    { id: uuid(), name: 'banana', count: 0 },
  ]);
  return (
    <div>
      <Addform />
      <ul>
        {basket.map((fruit) => (
          <Item key={fruit.id} fruit={fruit} />
        ))}
      </ul>
      <TotalAndReset />
    </div>
  );
};

export default Basket;
