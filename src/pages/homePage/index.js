import React from 'react';
import NavBar from '../../components/molecules/Navbar/Navbar';
import styles from './index.module.scss';
import Background from '../../components/atoms/Background/Background';

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
