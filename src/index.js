// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const { PUBLIC_URL } = process.env;

function renderApp(state) {
  ReactDOM.render(
    <App {...state} />,
    document.getElementById('root')
  );
}

fetch(`${PUBLIC_URL || ''}/data.json`)
  .then(response => response.json())
  .then(state => renderApp(state));

