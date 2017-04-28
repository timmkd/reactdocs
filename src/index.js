import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {Docs} from './app/docs';

import './index.scss';

ReactDOM.render(
  <Docs/>,
  document.getElementById('root')
);
