import React, { PropTypes } from 'react';

import styles from './Middle.css';

const Middle = ({ theme }) => (
  <div className={`${styles.wrapper} ${theme.middle}`}>middle</div>
);

Middle.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Middle;
