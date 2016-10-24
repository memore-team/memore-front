import React, { PropTypes } from 'react';

import styles from './Date.css';

const Date = ({ label, value }) => (
  <div className={styles.wrapper}>
    <p className={styles.txt}>{label}：</p>
    <p className={styles.txt}>{value}</p>
  </div>
);

Date.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Date;
