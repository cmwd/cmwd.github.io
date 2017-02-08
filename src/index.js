import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css/reset.css';

import App from './App';
import './index.css';

const preloadedState = document.getElementById('js-preloaded-state').innerHTML;

ReactDOM.render(
  <App {...JSON.parse(preloadedState)} />,
  document.getElementById('root')
);
