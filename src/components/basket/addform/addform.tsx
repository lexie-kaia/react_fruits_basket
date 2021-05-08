import React, { FormEvent, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './addform.module.css';

type Props = {
  handleAdd: (fruitName: string) => void;
};

const Addform = ({ handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (inputRef.current == null) return;
    if (formRef.current == null) return;

    event.preventDefault();
    const fruitName = inputRef.current.value;
    fruitName && handleAdd(fruitName);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Add any fruit"
      />
      <button className={styles.button}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default Addform;
