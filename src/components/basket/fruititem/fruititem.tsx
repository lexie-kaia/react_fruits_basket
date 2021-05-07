import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Fruit } from 'types/types';
import styles from './fruititem.module.css';
import Button from '../button/button';

type Props = {
  fruit: Fruit;
  handleIncrement: (fruit: Fruit) => void;
  handleDecrement: (fruit: Fruit) => void;
  onEditClick: () => void;
  handleDelete: (fruit: Fruit) => void;
};

const FruitItem = ({
  fruit,
  handleIncrement,
  handleDecrement,
  onEditClick,
  handleDelete,
}: Props) => {
  const onDeleteClick = () => {
    handleDelete(fruit);
  };

  const onIncrementClick = () => {
    handleIncrement(fruit);
  };

  const onDecrementClick = () => {
    handleDecrement(fruit);
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.name}>{fruit.name}</span>
        <span className={styles.count}>{fruit.count}</span>
      </div>

      <div>
        <Button onClick={onIncrementClick}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button onClick={onDecrementClick}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Button onClick={onEditClick}>
          <FontAwesomeIcon icon={faPen} />
        </Button>
        <Button onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </li>
  );
};

export default FruitItem;
