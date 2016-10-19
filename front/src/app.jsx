import React from 'react';
import { render } from 'react-dom';
import App from './components/frame/App/App';

import setting from './styles/setting.css'; // eslint-disable-line no-unused-vars
import reset from './styles/reset.css'; // eslint-disable-line no-unused-vars
import base from './styles/base.css'; // eslint-disable-line no-unused-vars

render(<App />, document.getElementById('app'));
