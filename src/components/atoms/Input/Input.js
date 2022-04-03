import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Input = ({ value, ...props }) => {
  return <input className={styles.input} value={value} {...props} />;
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Input;
