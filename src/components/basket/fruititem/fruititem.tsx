import React, { FormEvent, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import styles from './fruititem.module.css';

type Fruit = {
  id: string;
  name: string;
  count: number;
};

type Props = {
  fruit: Fruit;
  handleIncrement: (fruit: Fruit) => void;
  handleDecrement: (fruit: Fruit) => void;
  handleEdit: (fruit: Fruit, fruitName: string) => void;
  handleDelete: (fruit: Fruit) => void;
};

const FruitItem = ({
  fruit,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleEdit,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onDeleteClick = () => {
    handleDelete(fruit);
  };

  const onIncrementClick = () => {
    handleIncrement(fruit);
  };

  const onDecrementClick = () => {
    handleDecrement(fruit);
  };

  const onEditClick = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget == null) return;
    const inputValue = event.currentTarget.value;
    handleEdit(fruit, inputValue);
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.nameContainer}>
          <input
            ref={inputRef}
            className={styles.name}
            type="text"
            value={fruit.name}
            onChange={onChange}
          />
        </div>

        <div className={styles.restContainer}>
          <span className={styles.count}>{fruit.count}</span>
          <button className={styles.button} onClick={onIncrementClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className={styles.button} onClick={onDecrementClick}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className={styles.button} onClick={onEditClick}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button className={styles.button} onClick={onDeleteClick}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    </>
  );
};

export default FruitItem;
