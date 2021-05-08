import React from 'react';
import styles from './app.module.css';
import Header from './header/header';
import Basket from './basket/basket';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Basket />
    </div>
  );
}

export default App;
