import React, { PropTypes } from 'react';

import { LogoDark, LogoLight } from '../../partial/Icon/Logo';
import Gear from '../../partial/Icon/Gear';
import Button from '../../partial/Button/Button';
import User from '../../partial/User/User';

import styles from './Header.css';
import utility from '../../../styles/utility.css';

const Header = ({ themeName, theme, user }) => {
  const logo = themeName === 'light' ? <LogoLight /> : <LogoDark />;

  return (
    <header className={`${styles.header} ${theme.header}`}>
      <div className={`${styles.header__cell} ${utility.l}`}>
        <div className={styles.header__logo}>{logo}</div>
      </div>

      <div className={`${styles.header__cell} ${utility.r}`}>
        <div className={styles.header__info}>
          <div className={styles.header__info__prof}>
            <User user={user} theme={theme} />
          </div>

          <div className={styles.header__btn}>
            <Button>
              <Gear extend={theme.icon} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  themeName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Header;
