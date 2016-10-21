import React, { PropTypes } from 'react';

import styles from './Main.css';

const Main = ({ theme }) => (
  <div className={`${styles.main} ${theme.main}`}>main</div>
);

Main.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Main;
