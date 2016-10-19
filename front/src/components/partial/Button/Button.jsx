import React, { PropTypes } from 'react';
import styles from './Button.css';

const Button = ({ children }) => (
  <button className={styles.default}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.object
};

export default Button;
