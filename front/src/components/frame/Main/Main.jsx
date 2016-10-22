import React, { Component, PropTypes } from 'react';

import Date from '../../partial/Date/Date';
import Path from '../../partial/Path/Path';
import Tag from '../../partial/Tag/Tag';
import Title from '../../partial/Title/Title';

import styles from './Main.css';

class Main extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      paths: [
        {
          id: 1,
          name: 'Project'
        },
        {
          id: 2,
          name: 'memore'
        },
        {
          id: 3,
          name: 'design'
        }
      ],
      tags: [
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'React'
        },
        {
          id: 3,
          name: 'GraphQL'
        }
      ],
      title: 'これははじめての投稿テストです',
      created_at: '2016/10/10 22:32:32',
      updated_at: '2016/10/12 20:12:50'
    };
  }

  render() {
    const state = this.state;
    const { theme } = this.props;

    if (!state) {
      return <div className={`${styles.wrapper} ${theme.main}`} />;
    }

    return (
      <div className={`${styles.wrapper} ${theme.main}`}>
        <div className={styles.date}>
          <Date label="Created" value={state.created_at} />
          <Date label="Updated" value={state.updated_at} />
        </div>

        <div className={styles.info}>
          <Path paths={state.paths} theme={theme} />
          <Tag tags={state.tags} theme={theme} />
        </div>

        <div className={styles.title}>
          <Title value={state.title} theme={theme} />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Main;
