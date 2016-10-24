import React, { Component } from 'react';

import store from '../../store/';

import Header from '../frame/Header/Header';
import Container from '../frame/Container/Container';
import Side from '../frame/Side/Side';
import Middle from '../frame/Middle/Middle';
import Main from '../frame/Main/Main';

import styles from './App.css';
import themeDark from '../../../stylesheets/theme/dark.css';
import themeLight from '../../../stylesheets/theme/light.css';

const themes = {
  dark: themeDark,
  light: themeLight
};

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = null;
  }

  componentWillMount() {
    store.getState()
    .then((state) => {
      this.setState(state);
    });
  }

  render() {
    if (!this.state) {
      return <div className={styles.wrapper} />;
    }

    const themeName = this.state.theme;
    const theme = themes[themeName];

    return (
      <div className={`${styles.wrapper} ${theme.root}`}>
        <Header themeName={themeName} theme={theme} user={this.state.user} />

        <Container theme={theme}>
          <Side theme={theme} />
          <Middle theme={theme} />
          <Main memo={this.state.memo} theme={theme} />
        </Container>
      </div>
    );
  }
}

export default App;
