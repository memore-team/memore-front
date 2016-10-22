import React, { Component, PropTypes } from 'react';

import styles from './Title.css';

const LINE_HEIGHT = 30;
let textAreaEl = null;

function changeHeight(e) {
  textAreaEl.style.height = `${LINE_HEIGHT}px`;

  const lineNum = e.target.scrollHeight / LINE_HEIGHT;
  textAreaEl.style.height = `${lineNum * LINE_HEIGHT}px`;
}

class Title extends Component {
  componentDidMount() {
    textAreaEl = document.getElementById('js-textarea');
    changeHeight({ target: textAreaEl });
  }

  render() {
    const { theme, value } = this.props;

    return (
      <div className={`${styles.title} ${theme.title}`}>
        <textarea
          id="js-textarea"
          style={{ lineHeight: `${LINE_HEIGHT}px` }}
          className={styles.text}
          defaultValue={value}
          onChange={changeHeight}
        />
      </div>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Title;
