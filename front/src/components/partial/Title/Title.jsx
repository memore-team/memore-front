import React, { PropTypes } from 'react';

import styles from './Title.css';

const Title = ({ value, theme }) => (
  <input className={`${styles.title} ${theme.title}`} defaultValue={value} />
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Title;
