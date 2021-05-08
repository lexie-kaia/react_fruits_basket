import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './totalAndReset.module.css';

type Props = {
  totalCount: number;
  handleReset: () => void;
};

const TotalAndReset = ({ totalCount, handleReset }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.nameContainer}>
        <span className={styles.name}>Total</span>
      </div>
      <div className={styles.restContainer}>
        <span className={styles.count}>{totalCount}</span>
        <button className={styles.button} onClick={handleReset}>
          <FontAwesomeIcon icon={faRedoAlt} />
        </button>
      </div>
    </div>
  );
};

export default TotalAndReset;
