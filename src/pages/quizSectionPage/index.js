import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import Background from '../../components/atoms/Background/Background';
import Navbar from '../../components/molecules/Navbar/Navbar';
const QuizSectionPage = () => {
  return (
    <Background width="100%">
      <Navbar />
      <div className={styles.sectionCard}>
        <NavLink className={styles.title} to={'/quiz/javascript'}>
          javascript
        </NavLink>
        <ul className={styles.list}>
          <li className={styles.listItem}>basic level</li>
          <li className={styles.listItem}>extended level/soon</li>
          <li className={styles.listItem}>interesting things</li>
        </ul>
      </div>
    </Background>
  );
};

export default QuizSectionPage;
