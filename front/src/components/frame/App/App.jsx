import React, { Component, PropTypes } from 'react';
import styles from './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      text: 'test'
    };
  }

  render() {
    return <h1 className={styles.hoge}>{this.state.text}</h1>;
  }
}

App.propTypes = {};

export default App;
