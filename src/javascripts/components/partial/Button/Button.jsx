import React, { PropTypes } from 'react';
import styles from './Button.css';

const Button = ({ children, extend }) => (
  <button className={`${styles.default} ${extend}`}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.object,
  extend: PropTypes.string
};

export default Button;
