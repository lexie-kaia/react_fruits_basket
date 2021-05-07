import React, { ReactNode } from 'react';
import styles from './button.module.css';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: Props) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
