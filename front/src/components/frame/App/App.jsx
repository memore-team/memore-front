import React, { Component } from 'react';

import Header from '../Header/Header';

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
      <div className={`${styles.container} ${theme.root}`}>
        <Header themeName={themeName} theme={theme} user={this.state.user} />
      </div>
    );
  }
}

export default App;
