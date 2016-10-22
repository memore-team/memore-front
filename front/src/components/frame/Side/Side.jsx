import React, { PropTypes } from 'react';

import styles from './Side.css';

const Side = ({ theme }) => (
  <div className={`${styles.wrapper} ${theme.side}`}>sidehoge-</div>
);

Side.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Side;
