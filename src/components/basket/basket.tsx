import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Addform from './addform/addform';
import Fruititem from './fruititem/fruititem';
import TotalAndReset from './totalAndReset/totalAndReset';

type Fruit = {
  id: string;
  name: string;
  count: number;
};

const Basket = () => {
  const [basket, setBasket] = useState<Fruit[]>([
    { id: uuid(), name: 'Apple', count: 0 },
    { id: uuid(), name: 'Banana', count: 0 },
  ]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    setTotalCount(basket.filter((item) => item.count > 0).length);
  }, [basket]);

  const handleAdd = (fruitName: string) => {
    const updated = [...basket, { id: uuid(), name: fruitName, count: 0 }];
    setBasket(updated);
  };

  const handleEdit = (fruit: Fruit, fruitName: string) => {
    const updated = basket.map((item) => {
      if (item.id === fruit.id) {
        return { ...fruit, name: fruitName };
      }
      return item;
    });
    setBasket(updated);
  };

  const handleDelete = (fruit: Fruit) => {
    const updated = basket.filter((item) => item.id !== fruit.id);
    setBasket(updated);
  };

  const handleReset = () => {
    const updated = basket.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    setBasket(updated);
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
      <Addform handleAdd={handleAdd} />
      <ul>
        {basket.map((fruit) => (
          <Fruititem
            key={fruit.id}
            fruit={fruit}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      <TotalAndReset totalCount={totalCount} handleReset={handleReset} />
    </div>
  );
};

export default Basket;
