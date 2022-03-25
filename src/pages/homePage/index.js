import React from 'react';
import NavBar from '../../components/nav_bar/index';
import styles from './index.module.scss';
import Background from '../../components/background';

const HomePage = () => {
  return (
    <>
      <Background width="100%">
        <NavBar />
        <p className={styles.header}>Home page</p>
      </Background>
    </>
  );
};

export default HomePage;
