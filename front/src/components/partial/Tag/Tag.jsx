import React, { PropTypes } from 'react';

import TagIcon from '../Icon/Tag';

import styles from './Tag.css';

const Tag = ({ tags, theme }) => (
  <div className={styles.wrapper}>
    <div className={styles.icon}>
      <TagIcon extend={`${styles.tag} ${theme.icon}`} />
    </div>

    <ul className={styles.list}>
      {tags.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Tag;
