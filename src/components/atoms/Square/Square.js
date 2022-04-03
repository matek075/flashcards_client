import React from 'react';
import styles from './index.module.scss';

const Square = ({ children, ...props }) => (
  <div className={styles.base} {...props}>
    {children}
  </div>
);
export default Square;
