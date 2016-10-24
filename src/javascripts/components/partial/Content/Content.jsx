import React, { PropTypes } from 'react';

import styles from './Content.css';

const Content = ({ content }) => <textarea className={styles.text} defaultValue={content} />;

Content.propTypes = {
  content: PropTypes.string.isRequired
};

export default Content;
