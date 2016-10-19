import React, { PropTypes } from 'react';

import styles from './User.css';

const User = ({ user, theme }) => (
  <div className={styles.wrapper}>
    <p className={`${styles.name} ${theme.accentFont}`}>{user.name}</p>
    <div className={styles.thumb}><img src={user.thumb_path} width="30" height="30" alt={user.name} /></div>
  </div>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default User;
