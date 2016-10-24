import React, { Component, PropTypes } from 'react';

import ObserveElementHeight from '../../../util/ObserveElementHeight';

import Date from '../../partial/Date/Date';
import Path from '../../partial/Path/Path';
import Tag from '../../partial/Tag/Tag';
import Title from '../../partial/Title/Title';
import Content from '../../partial/Content/Content';

import styles from './Main.css';

const HEADER_HEIGHT = 51;
const PADDING_HEIGHT = 40;

class Main extends Component {
  constructor(...args) {
    super(...args);

    this.oehs = [];
    this.state = { contentHeight: 0 };
  }

  componentDidMount() {
    const main = document.getElementById('js-main');
    const checkChilds = Array.from(main.childNodes).slice(0, 3);

    checkChilds.forEach((child, i) => {
      const oeh = new ObserveElementHeight(i, child, this.setContentHeight.bind(this));
      this.oehs[i] = oeh;
    });
    this.setContentHeight();
  }

  setContentHeight() {
    const childHeight = this.oehs.reduce((acc, current) => acc + current.getOuterHeight(), 0);
    const contentHeight = innerHeight - HEADER_HEIGHT - PADDING_HEIGHT - childHeight;
    this.setState({ contentHeight });
  }

  render() {
    const { memo, theme } = this.props;

    if (!memo) {
      return <div className={`${styles.wrapper} ${theme.main}`} />;
    }

    return (
      <div id="js-main" className={`${styles.wrapper} ${theme.main}`}>
        <div className={styles.date}>
          <Date label="Created" value={memo.created_at} />
          <Date label="Updated" value={memo.updated_at} />
        </div>

        <div className={styles.info}>
          <Path paths={memo.paths} theme={theme} />
          <Tag tags={memo.tags} theme={theme} />
        </div>

        <div className={styles.title}>
          <Title value={memo.title} theme={theme} />
        </div>

        <div style={{ height: this.state.contentHeight }}>
          <Content content={memo.content} />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  memo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Main;
