import React, { Component } from 'react';

import Header from '../Header/Header';
import Container from '../Container/Container';
import Side from '../Side/Side';
import Middle from '../Middle/Middle';
import Main from '../Main/Main';

import styles from './App.css';
import themeDark from '../../../styles/theme/dark.css';
import themeLight from '../../../styles/theme/light.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.theme = {
      dark: themeDark,
      light: themeLight
    };
    this.state = {
      theme: 'dark',
      user: {
        id: 1,
        name: 'nabeliwo',
        thumb_path: '/img/favicon.png'
      }
    };
  }

  render() {
    const themeName = this.state.theme;
    const theme = this.theme[themeName];

    return (
      <div className={`${styles.wrapper} ${theme.root}`}>
        <Header themeName={themeName} theme={theme} user={this.state.user} />

        <Container theme={theme}>
          <Side theme={theme} />
          <Middle theme={theme} />
          <Main theme={theme} />
        </Container>
      </div>
    );
  }
}

export default App;
