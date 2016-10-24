import React, { PropTypes } from 'react';

import Folder from '../Icon/Folder';

import styles from './Path.css';

const Path = ({ paths, theme }) => (
  <div className={styles.wrapper}>
    <div className={styles.icon}>
      <Folder extend={`${styles.folder} ${theme.icon}`} />
    </div>

    <ul className={styles.list}>
      {paths.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

Path.propTypes = {
  paths: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Path;
