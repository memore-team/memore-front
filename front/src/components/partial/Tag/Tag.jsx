import React, { Component, PropTypes } from 'react';

import action from '../../../actions/memo';
import TagIcon from '../Icon/Tag';

import styles from './Tag.css';

class Tag extends Component {
  constructor(...args) {
    super(...args);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    action.changeTag(e.target.value);
  }

  render() {
    const { tags, theme } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <TagIcon extend={`${styles.tag} ${theme.icon}`} />
        </div>

        <div className={styles.box}>
          <div className={styles.list}>
            {tags.map(tag => <span key={tag.id} className={`${styles.label} ${theme.tagLabel}`}>{tag.name}</span>)}
          </div>

          <input
            type="text"
            className={`${styles.input} ${theme.tagInput}`}
            placeholder="Enter the tags separated by spaces."
            defaultValue={tags.map(tag => tag.name).join(' ')}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default Tag;
