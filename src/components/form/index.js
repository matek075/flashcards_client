import React from 'react';
import styles from './index.module.scss'

const Form_Component = ({ children, ...props }) => {
  return (
    <form className={styles.form} {...props}>{children}</form>
  );
};

export default Form_Component;
