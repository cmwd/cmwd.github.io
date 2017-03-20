// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { normalizer } from './entity';

const { PUBLIC_URL } = process.env;

function renderApp(store) {
  ReactDOM.render(
    <App sidebar={store.sidebar} sections={store.sections} />,
    document.getElementById('root')
  );
}

fetch(`${PUBLIC_URL || ''}/data.json`)
  .then(response => response.json())
  .then(normalizer)
  .then(renderApp);
