import React from 'react';
import styles from './index.module.scss';

const Button = ({ text, ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      {text}
    </button>
  );
};

export default Button;
