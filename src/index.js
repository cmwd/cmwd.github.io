import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/base-min.css';

import App from './App';

const preloadedState = document.getElementById('js-preloaded-state').innerHTML;

ReactDOM.render(
  <App {...JSON.parse(preloadedState)} />,
  document.getElementById('root')
);
