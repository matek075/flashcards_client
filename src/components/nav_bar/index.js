import React from 'react';
import styles from './index.module.scss';
import Auth from '../../utils/auth'
import Square from '../../components/square/index';
import { NavLink } from 'react-router-dom';
import learnIcon from '../../utils/icons/learn_icon.png';
import questionIcon from '../../utils/icons/question_icon.png';
import profileIcon from '../../utils/icons/profile_icon.png';
import homeIcon from '../../utils/icons/home_icon.png';
import exitIcon from '../../utils/icons/exit_icon.png';

const NavBar = () => {
  function logOut() {
    Auth.removeToken();
    window.location = '/';
  }
  return (
    <ul className={styles.verticalBar}>
      <nav>
        <NavLink to="/learn">
          <Square>
            <img src={learnIcon} alt="learn icon" className={styles.icon} />
          </Square>
        </NavLink>

        <NavLink to="/quiz">
          <Square>
            <img src={questionIcon} alt="question icon" classNames={styles.icon} />
          </Square>
        </NavLink>

        <NavLink to="profile">
          <Square>
            <img src={profileIcon} alt="profile icon" className={styles.icon} />
          </Square>
        </NavLink>

        <NavLink to="/">
          <Square>
            <img src={homeIcon} alt="home icon" className={styles.icon} />
          </Square>
        </NavLink>
        <Square
          onClick={() => {
            logOut();
          }}
        >
          <img src={exitIcon} alt="home icon" className={styles.icon} />
        </Square>
      </nav>
    </ul>
  );
};

export default NavBar;
