import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.copy}>
      This project is based on the tutorial originally named by 'Habit Tracker'
      on{' '}
      <a href="https://academy.dream-coding.com/courses/react-basic">
        Dream Coding React Course
      </a>
    </span>
  </footer>
);

export default Footer;
