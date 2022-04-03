import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import Button from '../../components/atoms/Button/Button';
import Background from '../../components/atoms/Background/Background';
import Logo from '../../utils/icons/logo';

const StartingPage = () => {
  return (
    <Background width="100%">
      <Logo />
      <div className={styles.inputGroup}>
        <NavLink to="/login">
          <Button text={'login'} />
        </NavLink>
      </div>
      <div className={styles.inputGroup}>
        <NavLink to="/register">
          <Button text={'register'} />
        </NavLink>
      </div>
    </Background>
  );
};
export default StartingPage;
