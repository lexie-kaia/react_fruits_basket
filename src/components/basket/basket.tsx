import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Fruit } from 'types/types';
import Addform from './addform/addform';
import Fruititem from './fruititem/fruititem';
import TotalAndReset from './totalAndReset/totalAndReset';

const Basket = () => {
  const [basket, setBasket] = useState<Fruit[]>([
    { id: uuid(), name: 'apple', count: 0 },
    { id: uuid(), name: 'banana', count: 0 },
  ]);

  const onAddClick = (fruitName: string) => {
    const updated = [...basket, { id: uuid(), name: fruitName, count: 0 }];
    setBasket(updated);
  };

  const handleDelete = (fruit: Fruit) => {
    const updated = basket.filter((item) => item.id !== fruit.id);
    setBasket(updated);
  };

  const onEditClick = () => {
    console.log('edit');
  };

  const onResetClick = () => {
    console.log('reset');
  };

  const handleIncrement = (fruit: Fruit) => {
    const updated = basket.map((item) => {
      if (item.id === fruit.id) {
        const count = fruit.count + 1;
        return { ...fruit, count };
      }
      return item;
    });
    setBasket(updated);
  };

  const handleDecrement = (fruit: Fruit) => {
    const updated = basket.map((item) => {
      if (item.id === fruit.id) {
        const count = fruit.count - 1;
        return { ...fruit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setBasket(updated);
  };

  return (
    <div>
      <Addform onAddClick={onAddClick} />
      <ul>
        {basket.map((fruit) => (
          <Fruititem
            key={fruit.id}
            fruit={fruit}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            onEditClick={onEditClick}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <TotalAndReset onResetClick={onResetClick} />
    </div>
  );
};

export default Basket;
