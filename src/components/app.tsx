import React from 'react';
import styles from './app.module.css';
import Header from './header/header';
import Basket from './basket/basket';
import Footer from './footer/footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
