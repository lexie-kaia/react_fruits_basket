import React from 'react';
import styles from 'components/app.module.css';
import Header from 'components/header/header';
import Basket from 'components/basket/basket';
import Footer from 'components/footer/footer';

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
