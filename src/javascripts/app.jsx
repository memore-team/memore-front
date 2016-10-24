import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

import setting from '../stylesheets/setting.css'; // eslint-disable-line no-unused-vars
import base from '../stylesheets/base.css'; // eslint-disable-line no-unused-vars

render(<App />, document.getElementById('app'));
