import React, { PropTypes } from 'react';

import styles from './Container.css';

const Container = ({ children }) => (
  <div className={styles.container}>{children.map(child => child)}</div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired
};

export default Container;
