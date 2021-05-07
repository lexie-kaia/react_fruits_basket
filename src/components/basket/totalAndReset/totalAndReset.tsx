import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import styles from './totalAndReset.module.css';
import Button from '../button/button';

type Props = {
  onResetClick: () => void;
};

const TotalAndReset = ({ onResetClick }: Props) => {
  return (
    <div className={styles.total}>
      <div className={styles.info}>
        <span className={styles.name}>Total</span>
        <span className={styles.count}>0</span>
      </div>
      <div>
        <Button onClick={onResetClick}>
          <FontAwesomeIcon icon={faTrashRestore} />
        </Button>
      </div>
    </div>
  );
};

export default TotalAndReset;
